//DO THIS NOW
//LINE 99 -DEFAULT VALUES FOR EDITED TO DO

//finish rest of default values when editing:
//current thing: saveButton.addEventListener - make it work properly both when creating a new and editing an existing todo, now it is a mess


//the checklist: when editing, have the proper numbers and default values for the checklist appear

//line~204 if you uncheck the checklist checkbox and then save
//the checklist should be deleted
//(remember for it target a particular ToDo [no globals])

//BUG: if one is in an edited state and others get deleted
// and then  you save the changes, the deleted todos reappear

//checklist elements have numbered ids, but those can repeat so change it


//Additionally:

// add restrictions to form input to ensure aesthetic compatibility
//style everything to look nice and neat and clean and super cool
//make them draggable to switch places
//sort them by different criteria
//divide them into projects
// limit which parts of toDoArray are exposed

import './style.css';


//////////////////////for testing purposes only
/* <button id="checklocalstorage-button">check local storage</button>
<button id="check todos array-button">check array of todos</button> */
document.getElementById('checklocalstorage-button').addEventListener('click', () => {
    console.log(JSON.stringify(localStorage.getItem('toDoArray')))

})
document.getElementById('check todos array-button').addEventListener('click', () => {
    console.log(JSON.stringify(ToDos.toDoArray))
})
document.getElementById('clear local storage-button').addEventListener('click', () => {
    localStorage.clear()
})


////////////////

const DOMManipulation = (function () {
    function putElementOnPage(element, description, insertBeforeWhat, innerText, parent) {
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
            element.setAttribute('class', description)
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

    function removeElements(...elements) {
        let counter = elements.length;
        for (let k = 0; k < counter; k++) {
            if (elements[k]) {
                elements[k].remove();
            }
        }
    }
    function removeAllChildren(element) {
        let counter = element.children.length;
        for (let m = 0; m <= counter; m++) {
            console.log('iteration' + m);
            console.log('m is ' + m)
            console.log(element.children);
            console.log(element.children[0]);
            if (element.children[0]) {
                element.children[0].remove();
            }
        }
    }

    return {
        putElementOnPage,
        removeElements,
        removeAllChildren
    }
})();


const form = (function () {
    const addButton = document.getElementById('add-button');
    const formContainer = document.getElementById('form-container')

    function checkCheckboxStatus(checkBoxElement, ifChecked, ifUnchecked) {//make sure the parameters are functions
        if (checkBoxElement.checked) {
            return ifChecked();
        }
        else {
            return ifUnchecked();
        }
    }
    function createFormToDefineToDo(container, editedToDo) {//the second argument is only used when the form is created to edit an existing todo

        let titleInput = document.createElement('input');
        let descriptionInput = document.createElement('input');
        let deadLineInput = document.createElement('input');
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        let prioritySelect = document.createElement('select');


        let checkListElementCounter = 0;
        let inputContainer = document.createElement('div');
        inputContainer.setAttribute('class', 'input-container');
        container.appendChild(inputContainer);
        let saveButton = document.createElement('button');
        saveButton.setAttribute('class', 'save-button')//changed to class from id, see if it causes issues

        DOMManipulation.putElementOnPage(titleInput, 'Title', undefined, undefined, inputContainer);
        DOMManipulation.putElementOnPage(descriptionInput, 'Description', undefined, undefined, inputContainer);

        DOMManipulation.putElementOnPage(deadLineInput, 'Deadline', undefined, undefined, inputContainer);
        deadLineInput.type = 'checkbox';

        function addDueDateInputOnPage(parent, insertBefore) {
            console.log("add due date on page runs")
            console.log("due date input is", dueDateInput)
            DOMManipulation.putElementOnPage(dueDateInput, 'Due-date', insertBefore, undefined, parent);
        }

        function checkDeadline() {//for the sake of reusability in the form and when editing
            console.log(deadLineInput.checked);
            checkCheckboxStatus(deadLineInput, () => {
                addDueDateInputOnPage(inputContainer, inputContainer.querySelector('label[for=Checklist]'))
            },
                () => {
                    DOMManipulation.removeElements(inputContainer.querySelector('input[type="date"]'), inputContainer.querySelector('label[for=Due-date]'))
                }
            );

        }

        deadLineInput.addEventListener('click', () => {
            checkDeadline();
        });



        let checkListInput = document.createElement('input');
        checkListInput.type = 'checkbox';
        DOMManipulation.putElementOnPage(checkListInput, 'Checklist', undefined, undefined, inputContainer);

        function controlCheckList(checkListCheckBox) {
            checkCheckboxStatus(checkListCheckBox, () => {
                let checklistContainer = document.createElement('div');
                DOMManipulation.putElementOnPage(checklistContainer, undefined, inputContainer.querySelector('label[for=Priority]'), undefined, inputContainer);
                checklistContainer.setAttribute('id', 'checklist-container');

                ////////////////////////////
                let itemCounter = 0;
                if (editedToDo) {
                    console.log('!!!!' + JSON.stringify(editedToDo.checkList));
                    console.log('!!!!' + JSON.stringify(editedToDo.checkList.length));
                }
                ////////////////////////////
                function createNextItem() {
                    let checkListElementContainer = document.createElement('div');
                    let elementNumber = checkListElementCounter;
                    checkListElementContainer.setAttribute('id', elementNumber);
                    checkListElementContainer.setAttribute('class', 'checklist-element-container');
                    checkListElementCounter++;

                    DOMManipulation.putElementOnPage(

                        checkListElementContainer,
                        undefined,
                        undefined,
                        undefined,
                        checklistContainer);

                    let checkListElement = document.createElement('input');
                    checkListElement.setAttribute('class', 'checklist-element')


                    DOMManipulation.putElementOnPage(checkListElement, undefined, undefined, undefined, checkListElementContainer);

                    let addNextElementButton = document.createElement('button');
                    DOMManipulation.putElementOnPage(addNextElementButton, undefined, undefined, "+", checkListElementContainer);
                    addNextElementButton.setAttribute('class', 'add-next-element-button')

                    addNextElementButton.addEventListener('click', () => {
                        DOMManipulation.removeElements(document.getElementsByClassName('add-next-element-button')[0])

                        createNextItem();
                    })

                    ////////////////////////////editing a ToDo
                    if (editedToDo) {
                        checkListElement.value = editedToDo.checkList[itemCounter].value;
                        itemCounter++;
                        if (itemCounter < editedToDo.checkList.length) {
                            createNextItem();
                        }
                    }
                    ////////////////////////////

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
                    document.getElementById('checklist-container').remove();
                }

            );
        }

        checkListInput.addEventListener('click', () => {
            controlCheckList(checkListInput);
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



        container.appendChild(saveButton);
        saveButton.innerText = 'save'
        saveButton.addEventListener('click', () => {//do this now, it is totally unsuited for editing to tods
            console.log('savebuttonclicked')
            let checkListValuesArray = [];
            if (inputContainer.getElementsByClassName('checklist-element').length > 0) {
                checkListValuesArray = Array.from(inputContainer.getElementsByClassName('checklist-element')).map((el) => { return { value: el.value, done: false } })
            }
            if (editedToDo) {//if editing
                console.log('!!!! saving with editing todo')
                ToDos.redefineToDo(editedToDo, titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, checkListValuesArray);

            }
            else {//if filling form for a new to do
                //let checkListValuesArray = Array.from(document.getElementsByClassName('checklist-element')).map((el) => { return { value: el.value, done: false } })
                console.log('checklistvalues')
                console.log(checkListValuesArray);
                ToDos.createToDo(titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, checkListValuesArray);


                for (let i = 0; i < document.getElementsByTagName('input').length; i++) {//clear the form values
                    inputContainer.getElementsByTagName('input')[i].value = '';
                    prioritySelect.value = 'None';
                }
                deadLineInput.checked = false;//uncheck the deadline checkbox
                checkCheckboxStatus(deadLineInput, addDueDateInputOnPage, () => {
                    DOMManipulation.removeElements(document.getElementById('form-container').querySelector('input[type="date"]'),
                        document.getElementById('form-container').querySelector('label[for=Due-date]'));
                });

            }
            DisplayingToDos.removeAllDisplayedContent();//remove and display again
            DisplayingToDos.display(ToDos.toDoArray);

        })

        //finish this now
        if (editedToDo) {//if the user is editing todo, display the current values
            console.log(editedToDo)
            console.log(editedToDo.title)
            titleInput.value = editedToDo.title;
            descriptionInput.value = editedToDo.description;
            if (editedToDo.dueDate) {
                deadLineInput.checked = true;
                checkDeadline()
                dueDateInput.value = editedToDo.dueDate;
            }
            if (editedToDo.checkList.length > 0) {
                console.log('there is a checklist')
                console.log(checkListInput)
                checkListInput.checked = true;
                controlCheckList(checkListInput);//make this function also check each checklist element and insert the current value into the appropriate
                //number of fields

            }
        }
    }

    function determineNoteState(particularToDo, containingElement) {
        let noteContainer = document.createElement('div');
        noteContainer.setAttribute('class', 'note-container');
        DOMManipulation.putElementOnPage(noteContainer, undefined, undefined, undefined, containingElement);

        let addNotesButton = document.createElement('button');

        let displayedNote = document.createElement('p');
        let notesInputArea = document.createElement('input');
        let saveNotesButton = document.createElement('button');
        let deleteNotesButton = document.createElement('button');
        let editNoteButton = document.createElement('button');

        function noteEditState() {//remove add button, add input field (with the value set, if available), save and remove buttons
            console.log('note edit state runs')
            if (addNotesButton) {
                addNotesButton.remove();
            }
            if (editNoteButton) {
                editNoteButton.remove();
            }
            DOMManipulation.putElementOnPage(displayedNote, undefined, undefined, undefined, noteContainer)
            if (particularToDo.notes) {
                notesInputArea.value = particularToDo.notes;
            }
            notesInputArea.setAttribute('id', 'note-input-area')
            DOMManipulation.putElementOnPage(notesInputArea, undefined, undefined, undefined, noteContainer);
            DOMManipulation.putElementOnPage(saveNotesButton, undefined, undefined, 'save', noteContainer);
            saveNotesButton.addEventListener('click', () => {
                displayNoteState(notesInputArea.value);
            })
            DOMManipulation.putElementOnPage(deleteNotesButton, undefined, undefined, 'x', noteContainer);
            deleteNotesButton.addEventListener('click', () => {
                console.log('delete notes button clicked')
                console.log(particularToDo.notes)
                noNoteState();
                console.log('no note state')
                console.log('todos.note!!!!!!!!!!!!!!!!!!' + particularToDo.notes)
                console.log('notesinputareea.value' + notesInputArea.value)
            })

        }
        function displayNoteState(value) {//display the note, remove input area, remove save button, add edit button
            console.log('display note state')
            particularToDo.notes = value;
            displayedNote.innerText = value;
            DOMManipulation.removeElements(notesInputArea, saveNotesButton);
            DOMManipulation.putElementOnPage(editNoteButton, undefined, deleteNotesButton, 'Edit note', noteContainer);
            editNoteButton.addEventListener('click', () => {
                console.log('edit note button clickerd');
                noteEditState();
            })
        }
        function noNoteState() {//remove everything from the noteContainer, except the Add note button
            console.log('no note state')
            DOMManipulation.removeAllChildren(noteContainer);
            notesInputArea.value = ""
            particularToDo.notes = undefined;
            displayedNote.innerText = ""
            DOMManipulation.putElementOnPage(addNotesButton, undefined, undefined, 'Add notes', noteContainer);
        }
        addNotesButton.addEventListener('click', () => {
            console.log(displayedNote)
            noteEditState();
            console.log('add notes button clicked');
        })


        if (particularToDo.notes) {//notes exist at start
            noteEditState();//for buttons to appear
            displayNoteState(particularToDo.notes);
        }
        else {
            noNoteState();
        }
    }


    //////////////////////notes ^
    addButton.addEventListener('click', () => {
        console.log('addbutton clicked');

        if (document.getElementById('form-container').getElementsByClassName('input-container').length < 1) {//if form has not been created already
            console.log('there are no forms');
            createFormToDefineToDo(formContainer);
            ///////////////////////
        }
    })


    return {
        checkCheckboxStatus,
        createFormToDefineToDo,
        determineNoteState,
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

        removeAllDisplayedContent()        //refresh when displaying
        console.log(JSON.stringify(ToDos.toDoArray))

        for (let j = 0; j < arrayOfTodos.length; j++) {
            console.log('the length of array of todos is ' + arrayOfTodos.length)
            let toDoContainer = document.createElement('div');
            toDoContainer.setAttribute('class', 'todo-container')
            toDoContainer.setAttribute('id', `ToDo number ${j}`)
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
            if (arrayOfTodos[j].checkList.length > 0) {
                let ToDosChecklist = document.createElement('div');
                DOMManipulation.putElementOnPage(ToDosChecklist, undefined, undefined, 'checklist:', toDoContainer);
                for (let l = 0; l < arrayOfTodos[j].checkList.length; l++) {
                    DOMManipulation.putElementOnPage('p', undefined, undefined, arrayOfTodos[j].checkList[l].value, ToDosChecklist);
                    let statusChecker = document.createElement('input')
                    statusChecker.setAttribute('type', 'checkbox')
                    statusChecker.setAttribute('id', `${arrayOfTodos[j].ordinal}-${l}`)//id is the ToDoOrdinal-checklist element number, e.g. 0-0, 0-1, 1-0 etc.
                    console.log('!CHECK!' + arrayOfTodos[j].checkList[l].done)
                    if (arrayOfTodos[j].checkList[l].done) {
                        console.log('!CHECK! runs')
                        statusChecker.checked = true;
                    }
                    DOMManipulation.putElementOnPage(statusChecker, undefined, undefined, undefined, ToDosChecklist);
                    statusChecker.addEventListener('click', (e) => {
                        form.checkCheckboxStatus(statusChecker,
                            () => {
                                arrayOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = true;
                                console.log(e.target.id + "checked")
                            },
                            () => {
                                arrayOfTodos[e.target.id[0]].checkList[e.target.id[e.target.id.length - 1]].done = false;
                                console.log(e.target.id + "notchecked")
                            })
                        console.log(arrayOfTodos)
                    })
                }

            }



            DOMManipulation.putElementOnPage('p', undefined, undefined, `Status: ${arrayOfTodos[j].toDoStatus}`, toDoContainer);
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////current thing to do
            let editToDoButton = document.createElement('button');
            DOMManipulation.putElementOnPage(editToDoButton, undefined, undefined, 'edit', toDoContainer);
            editToDoButton.addEventListener('click', () => {
                console.log('edit todo button clicked');
                DOMManipulation.removeAllChildren(toDoContainer);
                form.createFormToDefineToDo(toDoContainer, arrayOfTodos[j]);


            })

            let deleteToDoButton = document.createElement('button')
            DOMManipulation.putElementOnPage(deleteToDoButton, undefined, undefined, 'delete', toDoContainer);
            deleteToDoButton.addEventListener('click', () => {
                console.log('delete todo clicked')
                arrayOfTodos.splice(j, 1);
                toDoContainer.remove();
                //dealingWithLocalStorage.updateLocalStorage('toDoArray', arrayOfTodos); should not be necessary since clicking on the container
                //already updates local storage
                console.log('to do array after deleting element' + JSON.stringify(arrayOfTodos));
                console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
            })
            console.log(arrayOfTodos[j])
            console.log(arrayOfTodos[j].checkList)
            console.log('notes' + arrayOfTodos[j].notes)

            form.determineNoteState(arrayOfTodos[j], toDoContainer);

            toDoContainer.addEventListener('click', () => {
                //console.log('to do container clicked')
                dealingWithLocalStorage.updateLocalStorage('toDoArray', arrayOfTodos);
                //console.log('to do array after clicking' + JSON.stringify(arrayOfTodos));
                //console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
            })
        }
    }

    return {
        display,
        removeAllDisplayedContent
    }
})();

const ToDos = (function () {
    console.log('create todo runs');
    let toDoArray = [];//if there is something in localStorage these get changed
    let ordinal = 0;
    if (localStorage.getItem('toDoArray')) {
        toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
        ordinal = toDoArray.length;
    }

    class toDo {
        constructor(title, description, dueDate, priority, checkList) {
            this.title = title;
            this.description = description;
            this.priority = priority;
            this.ordinal = ordinal;
            this.toDoStatus = "open"
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
        console.log('TODO creation start');
        let newToDo = new toDo(title, description, dueDate, priority, checkList);
        ToDos.toDoArray.push(newToDo);
        dealingWithLocalStorage.updateLocalStorage('toDoArray', ToDos.toDoArray);
        console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
    }

    function redefineToDo(ToDo, title, description, dueDate, priority, checkList) {
        console.log('before redefining ' + JSON.stringify(ToDo))
        ToDo.title = title;
        ToDo.description = description;
        ToDo.dueDate = dueDate;
        ToDo.priority = priority;
        ToDo.checkList = checkList;
        console.log('after redefining ' + JSON.stringify(ToDo))
    }

    //ToDos.createToDo(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value, checkListValuesArray);
    // function redefineToDo(ToDo, title, description, dueDate, priority, checkList

    return {
        createToDo,
        redefineToDo,
        toDoArray,//restrict it later, to expose only a get of the arrat or perhaps particular properties to be changed, e.g. checklist status or priority
    }
})();

const dealingWithLocalStorage = (function () {

    function updateLocalStorage(keyName, value) {
        localStorage.setItem(keyName, JSON.stringify(value))
    }

    return {
        updateLocalStorage,
    }
})();
console.log('attention, this is local storage' + localStorage.getItem('toDoArray'));
if (localStorage.getItem('toDoArray')) {//if something has been set in the local storage, then retrieve on startup
    ToDos.toDoArray = JSON.parse(localStorage.getItem('toDoArray'))
    console.log(JSON.stringify(ToDos.toDoArray))
    DisplayingToDos.display(JSON.parse(localStorage.getItem('toDoArray')))
}
