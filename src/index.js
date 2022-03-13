/*Displaying created todos
divide them into projects
filter finished and unfinished
add possible checklist input

checklist should be checkable in the final todo interface
adding new positions and removing positions from checklist

//////DO THIS NOW:
display checklist with clickable check buttons



add logic to take the values from the checklist
add notes in the displayed checklist that you can add and edit
add restrictions to form input to ensure aesthetic compatibility
style everything to look nice and neat and clean and super cool
make them draggable to switch places?
*/

import './style.css';

const DOMManipulation = (function () {
    function putElementOnPage(element, description, insertBeforeWhat, innerText, parent) {//perhaps make a different type for inputs and non-inputs
        console.log("element putted on page is", element)
        if (typeof element === 'string') {//if element is not object, meaning an already created element
            element = document.createElement(element);
        }
        if (innerText) {
            element.innerText = innerText;
        }

        if (description) {//description is for labelled form elements
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

    function removeElements(...elements) {//elements have to be DOMs, not variables
        let counter = elements.length;
        for (let k = 0; k < counter; k++) {
            if (elements[k]) {
                elements[k].remove();
            }
        }
    }

    return {
        putElementOnPage,
        removeElements
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

    let checkListElementCounter = 0;

    function checkCheckboxStatus(checkBoxElement, ifChecked, ifUnchecked) {//make sure the parameters are functions
        if (checkBoxElement.checked) {
            ifChecked();
        }
        else {
            ifUnchecked();
        }
    }
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

            function addDueDateInputOnPage() {
                console.log("add due date on page runs")
                console.log("due date input is", dueDateInput)
                DOMManipulation.putElementOnPage(dueDateInput, 'Due-date', document.querySelector('label[for=Checklist]'), undefined, inputContainer);
            }

            deadLineInput.addEventListener('click', () => {
                checkCheckboxStatus(deadLineInput, addDueDateInputOnPage, () => {
                    DOMManipulation.removeElements(document.getElementById("Due-date"), document.querySelector('label[for=Due-date]'));
                });
            })

            //
            let checkListInput = document.createElement('input');
            checkListInput.type = 'checkbox';
            DOMManipulation.putElementOnPage(checkListInput, 'Checklist', undefined, undefined, inputContainer);
            //
            //checklist stuff
            checkListInput.addEventListener('click', () => {//check status, add an input page or remove


                checkCheckboxStatus(checkListInput, () => {
                    function createNextItem() {
                        let checkListElementContainer = document.createElement('div');
                        let elementNumber = checkListElementCounter;//perhaps shift numbering to the checklistElement itself
                        checkListElementContainer.setAttribute('id', elementNumber);
                        checkListElementContainer.setAttribute('class', 'checklist-element-container');
                        checkListElementCounter++;

                        DOMManipulation.putElementOnPage(

                            checkListElementContainer,
                            undefined,
                            document.querySelector('label[for=Priority]'),
                            undefined,
                            inputContainer);

                        let checkListElement = document.createElement('input');
                        checkListElement.setAttribute('class', 'checklist-element')

                        DOMManipulation.putElementOnPage(checkListElement, undefined, undefined, undefined, checkListElementContainer);

                        let addNextElementButton = document.createElement('button');
                        DOMManipulation.putElementOnPage(addNextElementButton, undefined, undefined, "+", checkListElementContainer);
                        addNextElementButton.setAttribute('class', 'add-next-element-button')

                        addNextElementButton.addEventListener('click', () => {
                            DOMManipulation.removeElements(document.getElementsByClassName('add-next-element-button')[0])

                            createNextItem()
                        })

                        let removeSpecificElementButton = document.createElement('button');
                        DOMManipulation.putElementOnPage(removeSpecificElementButton, undefined, undefined, "remove", checkListElementContainer);
                        removeSpecificElementButton.setAttribute('class', 'remove-specific-element-button')

                        removeSpecificElementButton.addEventListener('click', () => {
                            DOMManipulation.removeElements(removeSpecificElementButton.parentElement)
                        })
                    }
                    createNextItem();



                },
                    () => {
                        Array.from(document.getElementsByClassName('checklist-element-container')).forEach(DOMManipulation.removeElements);//remove all checklist elements
                        //the above throws an error (Uncaught TypeError: elements[k].remove is not a function) but works, I wonder why
                    }

                );

            })
            //checklist



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
                let checkListValuesArray = Array.from(document.getElementsByClassName('checklist-element')).map((el) => { return { value: el.value, done: false } })
                console.log("checklistvalues")
                console.log(checkListValuesArray);
                ToDos.createToDo(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value, checkListValuesArray);


                for (let i = 0; i < document.getElementsByTagName("input").length; i++) {//clear the form values
                    document.getElementsByTagName("input")[i].value = "";
                    prioritySelect.value = "None";
                }
                deadLineInput.checked = false;//uncheck the deadline checkbox
                checkCheckboxStatus(deadLineInput, addDueDateInputOnPage, () => {
                    DOMManipulation.removeElements(document.getElementById("Due-date"), document.querySelector('label[for=Due-date]'));
                });
                DisplayingToDos.removeAllDisplayedContent();//remove and display again
                DisplayingToDos.display(ToDos.toDoArray);
            })
        }
    })


    return {
        checkCheckboxStatus,
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
            DOMManipulation.putElementOnPage('p', undefined, undefined, `Title: ${arrayOfTodos[j].title}`, toDoContainer);
            if (arrayOfTodos[j].description) {
                DOMManipulation.putElementOnPage('p', undefined, undefined, `Description: ${arrayOfTodos[j].description}`, toDoContainer);
            }
            if (arrayOfTodos[j].dueDate) {
                DOMManipulation.putElementOnPage('p', undefined, undefined, `Due date: ${arrayOfTodos[j].dueDate}`, toDoContainer);
            }
            if (arrayOfTodos[j].priority !== 'None') {
                DOMManipulation.putElementOnPage('p', undefined, undefined, `Priority: ${arrayOfTodos[j].priority}`, toDoContainer);
            }
            if (arrayOfTodos[j].checkList !== []) {
                let ToDosChecklist = document.createElement('div');
                DOMManipulation.putElementOnPage(ToDosChecklist, undefined, undefined, 'checklist:', toDoContainer);
                for (let l = 0; l < arrayOfTodos[j].checkList.length; l++) {//add the checkable button here later
                    DOMManipulation.putElementOnPage('p', undefined, undefined, arrayOfTodos[j].checkList[l].value, ToDosChecklist);
                    let statusChecker = document.createElement('input')
                    statusChecker.setAttribute('type', 'checkbox')
                    statusChecker.setAttribute('id', `${arrayOfTodos[j].ordinal}-${l}`)//id is the ToDoOrdinal-checklist element number, e.g. 0-0, 0-1, 1-0 etc.
                    DOMManipulation.putElementOnPage(statusChecker, undefined, undefined, undefined, ToDosChecklist);
                    statusChecker.addEventListener('click', (e) => {
                        form.checkCheckboxStatus(statusChecker,
                            () => {
                                ToDos.toDoArray[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = true;
                                console.log(e.target.id + "checked")
                            },
                            () => {
                                ToDos.toDoArray[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = false;
                                console.log(e.target.id + "notchecked")
                            })
                            console.log(ToDos.toDoArray)
                    })
                }

            }
            console.log(arrayOfTodos[j])
            console.log(arrayOfTodos[j].checkList)
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
    let ordinal = 0;
    class toDo {
        constructor(title, description, priority, dueDate, checkList) {
            this.title = title;
            this.description = description;
            this.priority = priority;
            this.ordinal = ordinal;
            ordinal++;
            if (dueDate) {
                this.dueDate = dueDate;
            }
            if (checkList) {
                this.checkList = checkList;
            }
        }
    }
    function createToDo(title, description, dueDate, priority, checkList) {
        console.log('TODO creation start')
        let newToDo = new toDo(title, description, dueDate, priority, checkList)
        toDoArray.push(newToDo)
        console.log(toDoArray)
    }

    return {
        createToDo,
        toDoArray,//restrict it later, to expose only a get of the arrat or perhaps particular properties to be changed, e.g. checklist status or priority
    }
})();

ToDos.createToDo('Finish the ToDo list app', 'Do all the things specified', undefined, 'High', [
    { value: 'make checklist clickable', done: false },
    { value: 'improve style', done: false },
    { value: 'add separate projects', done: false }])
DisplayingToDos.display(ToDos.toDoArray)