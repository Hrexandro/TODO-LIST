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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQsa0RBQWtELFlBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdG8gZG9cclxuLy8gc2V0IHVwIGxpdmUgc2VydmVyXHJcbi8vIGZpZ3VyZSBvdXQgaG93IHRvIGdlbmVyYXRlIHRoZSBodG1sIGFzIHdlbGxcclxuLy8gc2V0IHVwIGEgZm9ybVxyXG4vLyBzZXQgdXAgZm9ybSBoaWRlciBhbmQgYXBwZWFyZXJcclxuLy8gY3JlYXRlIGRvbSBtYW5pcHVsYXRpb24gbW9kdWxlXHJcblxyXG4vL21ha2UgVG9Eb3MuY3JlYXRlVG9EbygpOyB3b3JrXHJcbi8vaG93IHRvIGdyYWIgdGhlbSB3aXRob3V0IGJlaW5nIG92ZXJseSB2ZXJib3NlXHJcbi8vIGNyZWF0ZSB0aGUgdmFyaWFibGVzIG91dHNpZGUgb2YgdGhlIGZ1bmN0aW9uIGFmdGVyIGFsbD9cclxuXHJcbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGZvcm1DcmVhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcclxuXHJcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGJ1dHRvbiBjbGlja2VkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpID09PSBudWxsKSB7Ly9pZiBmb3JtIGhhcyBub3QgYmVlbiBjcmVhdGVkIGFscmVhZHlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlcmUgYXJlIG5vIGZvcm1zXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmlkID0gJ2Zvcm0tY29udGFpbmVyJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhcHBlbmRGb3JtRWxlbWVudChlbGVtZW50LCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50Q29udGFpbmVyLmlkID0gJ2Zvcm0tY29udGFpbmVyJztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1FbGVtZW50Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMYWJlbC5mb3IgPSBgJHtkZXNjcmlwdGlvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExhYmVsLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1FbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRMYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHBlbmRGb3JtRWxlbWVudCh0aXRsZUlucHV0LCBcIlRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgYXBwZW5kRm9ybUVsZW1lbnQoZGVzY3JpcHRpb25JbnB1dCwgXCJEZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KGR1ZURhdGVJbnB1dCwgXCJEdWUtZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFwcGVuZEZvcm1FbGVtZW50KHByaW9yaXR5U2VsZWN0LCBcIlByaW9yaXR5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbih0ZXh0KXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oXCJOb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKFwiTG93XCIpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKFwiTWVkaXVtXCIpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKFwiSGlnaFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb0Rvcy5jcmVhdGVUb0RvKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5jb25zdCBUb0RvcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSB0b2RvIHJ1bnNcIilcclxuICAgIC8vIGxldCB0b0RvQXJyYXkgPSBbXTtcclxuICAgIC8vIGNsYXNzIHRvRG8ge1xyXG4gICAgLy8gICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlRPRE8gY3JlYXRpb24gc3RhcnRcIilcclxuICAgIC8vICAgICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXHJcbiAgICAvLyAgICAgdG9Eb0FycmF5LnB1c2gobmV3VG9EbylcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZVRvRG8sXHJcbiAgICB9XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9