/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFtRCxNQUFNO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcclxuXHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsZXQgZGVhZExpbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRidXR0b24gY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY29udGFpbmVyJykgPT09IG51bGwpIHsvL2lmIGZvcm0gaGFzIG5vdCBiZWVuIGNyZWF0ZWQgYWxyZWFkeVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIG5vIGZvcm1zJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLmlkID0gJ2Zvcm0tY29udGFpbmVyJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFwcGVuZEZvcm1FbGVtZW50KGVsZW1lbnQsIGRlc2NyaXB0aW9uLCBpbnNlcnRCZWZvcmVXaGF0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRMYWJlbC5pbm5lclRleHQgPSBgJHtkZXNjcmlwdGlvbn1gO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pZCA9IGAke2Rlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0QmVmb3JlV2hhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaW5zZXJ0QmVmb3JlKGVsZW1lbnRMYWJlbCwgaW5zZXJ0QmVmb3JlV2hhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWxlbWVudCwgaW5zZXJ0QmVmb3JlV2hhdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRMYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHBlbmRGb3JtRWxlbWVudCh0aXRsZUlucHV0LCAnVGl0bGUnKTtcclxuICAgICAgICAgICAgYXBwZW5kRm9ybUVsZW1lbnQoZGVzY3JpcHRpb25JbnB1dCwgJ0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KGRlYWRMaW5lSW5wdXQsICdEZWFkbGluZScpO1xyXG4gICAgICAgICAgICBkZWFkTGluZUlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tDaGVja2JveFN0YXR1cyhjaGVja0JveEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0JveEVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KGR1ZURhdGVJbnB1dCwgJ0R1ZS1kYXRlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVByaW9yaXR5XScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkR1ZS1kYXRlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9RHVlLWRhdGVdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWFkTGluZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDaGVja2JveFN0YXR1cyhkZWFkTGluZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChkZWFkTGluZUlucHV0LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFwcGVuZEZvcm1FbGVtZW50KGR1ZURhdGVJbnB1dCwgJ0R1ZS1kYXRlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVByaW9yaXR5XScpKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGR1ZURhdGVJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9RHVlLWRhdGVdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KHByaW9yaXR5U2VsZWN0LCAnUHJpb3JpdHknKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb24odGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ05vbmUnKTtcclxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdMb3cnKTtcclxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdNZWRpdW0nKTtcclxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdIaWdoJyk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnU3VibWl0J1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9Eb3MuY3JlYXRlVG9Ebyh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKS5sZW5ndGg7IGkrKykgey8vY2xlYXIgdGhlIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVtpXS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRlYWRMaW5lSW5wdXQuY2hlY2tlZCA9IGZhbHNlOy8vdW5jaGVjayB0aGUgZGVhZGxpbmUgY2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMoZGVhZExpbmVJbnB1dCkvL2hpZGUgdGhlIGRhdGVcclxuICAgICAgICAgICAgICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBjaGVja0NoZWNrYm94U3RhdHVzLFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IERpc3BsYXlpbmdUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRpc3BsYXkgdG9kbyBzdGFydHNcIilcclxuICAgICAgICBmb3IgKGk9MDtpPFRvRG9zLnRvRG9BcnJheS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coVG9Eb3MudG9Eb0FycmF5KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3BsYXksXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlIHRvZG8gcnVucycpXHJcbiAgICBsZXQgdG9Eb0FycmF5ID0gW107XHJcbiAgICBjbGFzcyB0b0RvIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIGlmIChkdWVEYXRlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVE9ETyBjcmVhdGlvbiBzdGFydCcpXHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxyXG4gICAgICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pXHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb0FycmF5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgICAgICB0b0RvQXJyYXksXHJcbiAgICB9XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9