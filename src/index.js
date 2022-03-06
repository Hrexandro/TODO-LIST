/*Displaying created todos
divide them into projects
filter finished and unfinished
add possible checklist input
checklist should be checkable in the final todo interface
add notes in the displayed checklist that you can add and edit
add restrictions to form input to ensure aesthetic compatibility
style everything to look nice and neat and clean and super cool
make them draggable to switch places?
*/

import './style.css';

const DOMManipulation = (function () {
    function putElementOnPage(element, description, insertBeforeWhat, innerText, parent) {//description is for labelled form elements

        if (typeof element === 'string'){//if element is not object, meaning an already created element
            element = document.createElement(element);
        }
        if (innerText){
            element.innerText = innerText;
        }

        if (description) {
            let elementLabel = document.createElement('label');
            elementLabel.setAttribute('for', description);
            elementLabel.innerText = `${description}`;
            element.setAttribute('id', description)
            if (insertBeforeWhat) {
                parent.insertBefore(elementLabel, insertBeforeWhat);
            }
            else {
                parent.appendChild(elementLabel);
            }   
        }
        if (insertBeforeWhat) {
            parent.insertBefore(element, insertBeforeWhat);
        }
        else {
            parent.appendChild(element);
        }
    }

    return {
        putElementOnPage
    }
})();
const form = (function () {
    const addButton = document.getElementById('add-button');
    const formContainer = document.getElementById('form-container')

    let titleInput = document.createElement('input');
    let descriptionInput = document.createElement('input');
    let deadLineInput = document.createElement('input');
    let dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    let prioritySelect = document.createElement('select');

    addButton.addEventListener('click', () => {
        console.log('addbutton clicked');

        if (document.getElementById('input-container') === null) {//if form has not been created already
            console.log('there are no forms');

            let inputContainer = document.createElement('div');
            inputContainer.id = 'input-container';
            formContainer.appendChild(inputContainer);
            let submitButton = document.createElement('button');
            submitButton.setAttribute('id', 'submit-button')

            DOMManipulation.putElementOnPage(titleInput, 'Title', undefined, undefined, inputContainer);
            DOMManipulation.putElementOnPage(descriptionInput, 'Description', undefined, undefined, inputContainer);
            DOMManipulation.putElementOnPage(deadLineInput, 'Deadline', undefined, undefined, inputContainer);
            deadLineInput.type = 'checkbox';

            function checkCheckboxStatus(checkBoxElement) {
                if (checkBoxElement.checked) {
                    DOMManipulation.putElementOnPage(dueDateInput, 'Due-date', document.querySelector('label[for=Priority]'), undefined, inputContainer);
                }
                else {
                    if (document.getElementById("Due-date")) {
                        dueDateInput.remove();
                        document.querySelector('label[for=Due-date]').remove();
                    }
                }
            }

            deadLineInput.addEventListener('click', () => {
                checkCheckboxStatus(deadLineInput);
            })
            DOMManipulation.putElementOnPage(prioritySelect, 'Priority', undefined, undefined, inputContainer);
            function createSelectOption(text) {
                let option = document.createElement('option');
                prioritySelect.appendChild(option);
                option.value = text;
                option.innerText = text;
            }
            createSelectOption('None');
            createSelectOption('Low');
            createSelectOption('Medium');
            createSelectOption('High');

            formContainer.appendChild(submitButton);
            submitButton.innerText = 'Submit'
            document.getElementById('submit-button').addEventListener('click', () => {
                ToDos.createToDo(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value);
                for (let i = 0; i < document.getElementsByTagName("input").length; i++) {//clear the form values
                    document.getElementsByTagName("input")[i].value = "";
                    prioritySelect.value = "None"
                }
                deadLineInput.checked = false;//uncheck the deadline checkbox
                checkCheckboxStatus(deadLineInput)//hide the date
                DisplayingToDos.removeAllDisplayedContent();
                DisplayingToDos.display(ToDos.toDoArray);
            })
        }
    })


    return {
        // checkCheckboxStatus,
    }

})();

const DisplayingToDos = (function () {

    let contentDisplay = document.getElementById('content-display');

    function removeAllDisplayedContent() {
        let child = contentDisplay.lastElementChild;
        while (child) {
            contentDisplay.removeChild(child);
            child = contentDisplay.lastElementChild;
        }
    }

    function display(arrayOfTodos) {
        console.log('display todo starts');
        for (let j = 0; j < arrayOfTodos.length; j++) {
            let toDoContainer = document.createElement('div');
            contentDisplay.appendChild(toDoContainer);
            DOMManipulation.putElementOnPage('p', undefined, undefined,`Title: ${arrayOfTodos[j].title}`, toDoContainer);
            if (arrayOfTodos[j].description) {
                DOMManipulation.putElementOnPage('p', undefined, undefined,`Description: ${arrayOfTodos[j].description}`, toDoContainer);
            }
            if (arrayOfTodos[j].dueDate) {
                DOMManipulation.putElementOnPage('p', undefined, undefined,`Due date: ${arrayOfTodos[j].dueDate}`, toDoContainer);
            }
            if (arrayOfTodos[j].priority !== 'None') {
                DOMManipulation.putElementOnPage('p', undefined, undefined,`Priority: ${arrayOfTodos[j].priority}`, toDoContainer);
            }
            console.log(arrayOfTodos[j])
        }
    }

    return {
        display,
        removeAllDisplayedContent,
    }
})();

const ToDos = (function () {
    console.log('create todo runs')
    let toDoArray = [];
    class toDo {
        constructor(title, description, priority, dueDate) {
            this.title = title;
            this.description = description;
            this.priority = priority;
            if (dueDate) {
                this.dueDate = dueDate;
            }
        }
    }
    function createToDo(title, description, dueDate, priority) {
        console.log('TODO creation start')
        let newToDo = new toDo(title, description, dueDate, priority)
        toDoArray.push(newToDo)
        console.log(toDoArray)
    }

    return {
        createToDo,
        toDoArray,
    }
})();