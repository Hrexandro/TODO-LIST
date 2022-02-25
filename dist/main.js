/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RCxvQ0FBb0MsWUFBWTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvIGRvXHJcbi8vIHNldCB1cCBsaXZlIHNlcnZlclxyXG4vLyBmaWd1cmUgb3V0IGhvdyB0byBnZW5lcmF0ZSB0aGUgaHRtbCBhcyB3ZWxsXHJcbi8vIHNldCB1cCBhIGZvcm1cclxuLy8gc2V0IHVwIGZvcm0gaGlkZXIgYW5kIGFwcGVhcmVyXHJcbi8vIGNyZWF0ZSBkb20gbWFuaXB1bGF0aW9uIG1vZHVsZVxyXG5cclxuXHJcbi8vIFBST0JMRU1TXHJcbi8vIEVMRU1FTlQgTEFCRUxTIERPIE5BVCBIQVZFIFRIRSBGT1IgVklTSUJMRSBJTiBUSEUgQlJPV1NFUlMgSFRNTFxyXG4vLyBMSU5LIFRIRU0gV0lUSCBUSEUgSUQ/XHJcbi8vIFRIRU4gTUFLRSBTVVJFIFRIQVQgVEhFIExBQkVMIEZPUiBEVUUgREFURSBBTFNPIEdFVFMgREVMRVRFRCBXSEVOIFVOQ0hFQ0tJTkcgVEhFIENIRUNLQk9YXHJcblxyXG5jb25zdCBmb3JtID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBmb3JtQ3JlYXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbGV0IGRlYWRMaW5lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRidXR0b24gY2xpY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpID09PSBudWxsKSB7Ly9pZiBmb3JtIGhhcyBub3QgYmVlbiBjcmVhdGVkIGFscmVhZHlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZm9ybXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9ICdmb3JtLWNvbnRhaW5lcic7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ1dHRvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYXBwZW5kRm9ybUVsZW1lbnQoZWxlbWVudCwgZGVzY3JpcHRpb24sIGluc2VydEJlZm9yZVdoYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2xldCBmb3JtRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZm9ybUVsZW1lbnRDb250YWluZXIuaWQgPSAnZm9ybS1jb250YWluZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMYWJlbC5pbm5lclRleHQgPSBgJHtkZXNjcmlwdGlvbn1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBgJHtkZXNjcmlwdGlvbn1gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcm1FbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRMYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9ybUVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydEJlZm9yZVdoYXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmluc2VydEJlZm9yZShlbGVtZW50TGFiZWwsIGluc2VydEJlZm9yZVdoYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmluc2VydEJlZm9yZShlbGVtZW50LCBpbnNlcnRCZWZvcmVXaGF0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50TGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KHRpdGxlSW5wdXQsICdUaXRsZScpO1xyXG4gICAgICAgICAgICAgICAgYXBwZW5kRm9ybUVsZW1lbnQoZGVzY3JpcHRpb25JbnB1dCwgJ0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBhcHBlbmRGb3JtRWxlbWVudChkZWFkTGluZUlucHV0LCdEZWFkbGluZScpO1xyXG4gICAgICAgICAgICAgICAgZGVhZExpbmVJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgICAgIGRlYWRMaW5lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlYWRMaW5lSW5wdXQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KGR1ZURhdGVJbnB1dCwgJ0R1ZS1kYXRlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVByaW9yaXR5XScpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPUR1ZS1kYXRlXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRGb3JtRWxlbWVudChwcmlvcml0eVNlbGVjdCwgJ1ByaW9yaXR5Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbih0ZXh0KXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdOb25lJyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oJ0xvdycpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdNZWRpdW0nKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignSGlnaCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnU3VibWl0J1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb0Rvcy5jcmVhdGVUb0RvKHRpdGxlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxkdWVEYXRlSW5wdXQudmFsdWUscHJpb3JpdHlTZWxlY3QudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSkoKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgVG9Eb3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZSB0b2RvIHJ1bnMnKVxyXG4gICAgbGV0IHRvRG9BcnJheSA9IFtdO1xyXG4gICAgY2xhc3MgdG9EbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUT0RPIGNyZWF0aW9uIHN0YXJ0JylcclxuICAgICAgICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXHJcbiAgICAgICAgdG9Eb0FycmF5LnB1c2gobmV3VG9EbylcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0RvQXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVUb0RvLFxyXG5cclxuICAgIH1cclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=