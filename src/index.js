//to do
// set up live server
// figure out how to generate the html as well
// set up a form
// set up form hider and appearer
// create dom manipulation module

//make ToDos.createToDo(); work
//how to grab them without being overly verbose
// create the variables outside of the function after all?

const form = (function () {

    const formCreation = (function () {
        const addButton = document.getElementById('add-button');

        let titleInput = document.createElement('input');
        let descriptionInput = document.createElement('input');
        let dueDateInput = document.createElement('input');
        let prioritySelect = document.createElement('select');

        addButton.addEventListener('click', () => {
            console.log("addbutton clicked");

            if (document.getElementById('form-container') === null) {//if form has not been created already
                console.log("there are no forms");

                let formContainer = document.createElement('div');
                formContainer.id = 'form-container';
                document.body.appendChild(formContainer);
                let submitButton = document.createElement('button');
                submitButton.setAttribute('id', 'submit-button')

                function appendFormElement(element, description) {
                    let formElementContainer = document.createElement('div');
                    formElementContainer.id = 'form-container';
                    document.body.appendChild(formElementContainer);
                    let elementLabel = document.createElement('label')
                    elementLabel.for = `${description}`
                    elementLabel.textContent = `${description}`
                    formElementContainer.appendChild(elementLabel);
                    formElementContainer.appendChild(element);
                }
                appendFormElement(titleInput, "Title");
                appendFormElement(descriptionInput, "Description");
                appendFormElement(dueDateInput, "Due-date");
                appendFormElement(prioritySelect, "Priority");

                function createSelectOption(text){
                    let option = document.createElement('option');
                    prioritySelect.appendChild(option);
                    option.value = text.toLowerCase();
                    option.innerText = text;
                }
                createSelectOption("None");
                createSelectOption("Low");
                createSelectOption("Medium");
                createSelectOption("High");

                document.body.appendChild(submitButton);
                submitButton.innerText = "Submit"
                document.getElementById('submit-button').addEventListener('click', () => {
                    ToDos.createToDo();
                })
            }
        })

    })();


    return {

    }

})();

const ToDos = (function () {
    console.log("create todo runs")
    // let toDoArray = [];
    // class toDo {
    //     constructor(title, description, dueDate, priority) {
    //         this.title = title;
    //         this.description = description;
    //         this.dueDate = dueDate;
    //         this.priority = priority;
    //     }
    // }
    // function createToDo(title, description, dueDate, priority) {
    //     console.log("TODO creation start")
    //     let newToDo = new toDo(title, description, dueDate, priority)
    //     toDoArray.push(newToDo)
    // }

    return {
        createToDo,
    }
})();