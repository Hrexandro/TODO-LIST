//to do
// set up live server
// figure out how to generate the html as well
// set up a form
// set up form hider and appearer
// create dom manipulation module


// PROBLEMS
// ELEMENT LABELS DO NAT HAVE THE FOR VISIBLE IN THE BROWSERS HTML
// LINK THEM WITH THE ID?
// THEN MAKE SURE THAT THE LABEL FOR DUE DATE ALSO GETS DELETED WHEN UNCHECKING THE CHECKBOX

const form = (function () {

    const formCreation = (function () {
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
                    //let formElementContainer = document.createElement('div');
                    //formElementContainer.id = 'form-container';
                    //document.body.appendChild(formElementContainer);
                    let elementLabel = document.createElement('label');
                    elementLabel.setAttribute('for', description);
                    elementLabel.innerText = `${description}`;
                    element.id = `${description}`;
                    // formElementContainer.appendChild(elementLabel);
                    // formElementContainer.appendChild(element);
                    if (insertBeforeWhat){
                        formContainer.insertBefore(elementLabel, insertBeforeWhat);
                        formContainer.insertBefore(element, insertBeforeWhat);
                    }
                    else{
                        formContainer.appendChild(elementLabel);
                        formContainer.appendChild(element);
                    }
                }
                appendFormElement(titleInput, 'Title');
                appendFormElement(descriptionInput, 'Description');
                appendFormElement(deadLineInput,'Deadline');
                deadLineInput.type = 'checkbox';
                deadLineInput.addEventListener('click',()=>{
                    if (deadLineInput.checked){
                        appendFormElement(dueDateInput, 'Due-date', document.querySelector('label[for=Priority]'));
                    }
                    else {
                        dueDateInput.remove();
                        document.querySelector('label[for=Due-date]').remove();
                    }



                })
                appendFormElement(prioritySelect, 'Priority');


                function createSelectOption(text){
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
                    ToDos.createToDo(titleInput.value,descriptionInput.value,dueDateInput.value,prioritySelect.value);
                })
            }
        })

    })();


    return {

    }

})();

const ToDos = (function () {
    console.log('create todo runs')
    let toDoArray = [];
    class toDo {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
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

    }
})();