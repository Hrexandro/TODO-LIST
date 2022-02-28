const form = (function () {
    const addButton = document.getElementById('add-button');

    let titleInput = document.createElement('input');
    let descriptionInput = document.createElement('input');
    let deadLineInput = document.createElement('input');
    let dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    let prioritySelect = document.createElement('select');

    addButton.addEventListener('click', () => {
        console.log('addbutton clicked');

        if (document.getElementById('form-container') === null) {//if form has not been created already
            console.log('there are no forms');

            let formContainer = document.createElement('div');
            formContainer.id = 'form-container';
            document.body.appendChild(formContainer);
            let submitButton = document.createElement('button');
            submitButton.setAttribute('id', 'submit-button')

            function appendFormElement(element, description, insertBeforeWhat) {
                let elementLabel = document.createElement('label');
                elementLabel.setAttribute('for', description);
                elementLabel.innerText = `${description}`;
                element.id = `${description}`;
                if (insertBeforeWhat) {
                    formContainer.insertBefore(elementLabel, insertBeforeWhat);
                    formContainer.insertBefore(element, insertBeforeWhat);
                }
                else {
                    formContainer.appendChild(elementLabel);
                    formContainer.appendChild(element);
                }
            }
            appendFormElement(titleInput, 'Title');
            appendFormElement(descriptionInput, 'Description');
            appendFormElement(deadLineInput, 'Deadline');
            deadLineInput.type = 'checkbox';

            function checkCheckboxStatus(checkBoxElement) {
                if (checkBoxElement.checked) {
                    appendFormElement(dueDateInput, 'Due-date', document.querySelector('label[for=Priority]'));
                }
                else {
                    if (document.getElementById("Due-date")){
                        dueDateInput.remove();
                        document.querySelector('label[for=Due-date]').remove();
                    }
                }
            }

            deadLineInput.addEventListener('click', () => {
                checkCheckboxStatus(deadLineInput);
                // if (deadLineInput.checked){
                //     appendFormElement(dueDateInput, 'Due-date', document.querySelector('label[for=Priority]'));
                // }
                // else {
                //     dueDateInput.remove();
                //     document.querySelector('label[for=Due-date]').remove();
                // }
            })
            appendFormElement(prioritySelect, 'Priority');


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

            document.body.appendChild(submitButton);
            submitButton.innerText = 'Submit'
            document.getElementById('submit-button').addEventListener('click', () => {
                ToDos.createToDo(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value);

                for (i = 0; i < document.getElementsByTagName("input").length; i++) {//clear the form values
                    document.getElementsByTagName("input")[i].value = "";
                    prioritySelect.value = "None"
                }

                deadLineInput.checked = false;//uncheck the deadline checkbox
                checkCheckboxStatus(deadLineInput)//hide the date
                DisplayingToDos.display();
            })
        }
    })


    return {
        // checkCheckboxStatus,
    }

})();

const DisplayingToDos = (function () {

    function display() {
        console.log("display todo starts")
        for (i=0;i<ToDos.toDoArray.length;i++){
            console.log(ToDos.toDoArray)
        }
    }

    return {
        display,
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
            if (dueDate){
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