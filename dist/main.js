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
                    dueDateInput.remove();
                    document.querySelector('label[for=Due-date]').remove();
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
                ToDos.createToDo(titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value);

                for (i = 0; i < document.getElementsByTagName("input").length; i++) {//clear the form values
                    document.getElementsByTagName("input")[i].value = "";
                    console.log(i)
                    console.log(document.getElementsByTagName("input")[i]);
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
    }

    return {
        display,
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
        toDoArray,
    }
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQW1ELE1BQU07QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ1dHRvbicpO1xyXG5cclxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGxldCBkZWFkTGluZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZGJ1dHRvbiBjbGlja2VkJyk7XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jb250YWluZXInKSA9PT0gbnVsbCkgey8vaWYgZm9ybSBoYXMgbm90IGJlZW4gY3JlYXRlZCBhbHJlYWR5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZm9ybXMnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAnZm9ybS1jb250YWluZXInO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1idXR0b24nKVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYXBwZW5kRm9ybUVsZW1lbnQoZWxlbWVudCwgZGVzY3JpcHRpb24sIGluc2VydEJlZm9yZVdoYXQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudExhYmVsLmlubmVyVGV4dCA9IGAke2Rlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkID0gYCR7ZGVzY3JpcHRpb259YDtcclxuICAgICAgICAgICAgICAgIGlmIChpbnNlcnRCZWZvcmVXaGF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWxlbWVudExhYmVsLCBpbnNlcnRCZWZvcmVXaGF0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmluc2VydEJlZm9yZShlbGVtZW50LCBpbnNlcnRCZWZvcmVXaGF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudExhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KHRpdGxlSW5wdXQsICdUaXRsZScpO1xyXG4gICAgICAgICAgICBhcHBlbmRGb3JtRWxlbWVudChkZXNjcmlwdGlvbklucHV0LCAnRGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgYXBwZW5kRm9ybUVsZW1lbnQoZGVhZExpbmVJbnB1dCwgJ0RlYWRsaW5lJyk7XHJcbiAgICAgICAgICAgIGRlYWRMaW5lSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja0NoZWNrYm94U3RhdHVzKGNoZWNrQm94RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrQm94RWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kRm9ybUVsZW1lbnQoZHVlRGF0ZUlucHV0LCAnRHVlLWRhdGUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9UHJpb3JpdHldJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1EdWUtZGF0ZV0nKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVhZExpbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMoZGVhZExpbmVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoZGVhZExpbmVJbnB1dC5jaGVja2VkKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBhcHBlbmRGb3JtRWxlbWVudChkdWVEYXRlSW5wdXQsICdEdWUtZGF0ZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1Qcmlvcml0eV0nKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkdWVEYXRlSW5wdXQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUR1ZS1kYXRlXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBhcHBlbmRGb3JtRWxlbWVudChwcmlvcml0eVNlbGVjdCwgJ1ByaW9yaXR5Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9uKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdOb25lJyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTG93Jyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTWVkaXVtJyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignSGlnaCcpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gJ1N1Ym1pdCdcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvRG9zLmNyZWF0ZVRvRG8odGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIikubGVuZ3RoOyBpKyspIHsvL2NsZWFyIHRoZSBmb3JtIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbaV0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRlYWRMaW5lSW5wdXQuY2hlY2tlZCA9IGZhbHNlOy8vdW5jaGVjayB0aGUgZGVhZGxpbmUgY2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGNoZWNrQ2hlY2tib3hTdGF0dXMoZGVhZExpbmVJbnB1dCkvL2hpZGUgdGhlIGRhdGVcclxuICAgICAgICAgICAgICAgIERpc3BsYXlpbmdUb0Rvcy5kaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBjaGVja0NoZWNrYm94U3RhdHVzLFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IERpc3BsYXlpbmdUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRpc3BsYXkgdG9kbyBzdGFydHNcIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3BsYXksXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlIHRvZG8gcnVucycpXHJcbiAgICBsZXQgdG9Eb0FycmF5ID0gW107XHJcbiAgICBjbGFzcyB0b0RvIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RPRE8gY3JlYXRpb24gc3RhcnQnKVxyXG4gICAgICAgIGxldCBuZXdUb0RvID0gbmV3IHRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcclxuICAgICAgICB0b0RvQXJyYXkucHVzaChuZXdUb0RvKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9BcnJheSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZVRvRG8sXHJcbiAgICAgICAgdG9Eb0FycmF5LFxyXG4gICAgfVxyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==