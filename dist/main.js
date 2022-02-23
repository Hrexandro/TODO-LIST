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

const form = (function () {

    const formCreation = (function (){
        const addButton = document.getElementById('add-button');
    
    
        addButton.addEventListener('click',()=>{
            console.log("addbutton clicked");
            
            if (document.getElementById('form-container')===null){//if form has not been created already
                console.log("there are no forms");
                let formContainer = document.createElement('div');
                formContainer.id = 'form-container';
                document.body.appendChild(formContainer);
    
                function createFormElement(type, description){
                    let formDiv = document.createElement('div');
                    let element = document.createElement(type);
                    let elementLabel = document.createElement('label')
    
                    if (type !== 'button'){
                        elementLabel.for = `${description}`
                        elementLabel.textContent = `${description}`
                        formDiv.appendChild(elementLabel);
                    }
                    else{
                        element.setAttribute('id','submit-button');
                        element.innerText = description;
                    }
                    if (type === 'select'){
                        function createSelectOption(optionText){
                            let newOption = document.createElement('option');
                            element.appendChild(newOption);
                            newOption.value = optionText.toLowerCase();
                            newOption.innerText = optionText;
                        }

                        createSelectOption('None');
                        createSelectOption('Low');
                        createSelectOption('Medium');
                        createSelectOption('High');
                        // let optionNone = document.createElement('option');
                        // let optionLow = document.createElement('option');
                        // let optionMedium = document.createElement('option');
                        // let optionHigh = document.createElement('option');
                        // element.appendChild(optionNone);
                        // element.appendChild(optionLow);
                        // element.appendChild(optionMedium);
                        // element.appendChild(optionHigh);
                        // optionNone.value = 'none';
                        // optionLow.value = 'low';
                        // optionMedium.value = 'medium';
                        // optionHigh.value = 'high';
                        // optionNone.value = 'none';
                        // optionLow.value = 'low';
                        // optionMedium.value = 'medium';
                        // optionHigh.value = 'high';
                    }
    
                    formContainer.appendChild(formDiv);
                    formDiv.appendChild(element);
                    element.name = description;
                }
    
                createFormElement('input','Title');
                createFormElement('input','Description');
                createFormElement('input','Due-Date');
                createFormElement('select','Priority');
                createFormElement('button','submit', 'submit');
    
                document.getElementById('submit-button').addEventListener('click',()=>{
                    ToDos.createToDo();
                })
            }
        })

    })();


    return {

    }

})();

const ToDos = (function (){
    function createToDo(){
        console.log("TODO created!")
    }

    return {
        createToDo,
    }
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRCxzREFBc0QsWUFBWTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdG8gZG9cclxuLy8gc2V0IHVwIGxpdmUgc2VydmVyXHJcbi8vIGZpZ3VyZSBvdXQgaG93IHRvIGdlbmVyYXRlIHRoZSBodG1sIGFzIHdlbGxcclxuLy8gc2V0IHVwIGEgZm9ybVxyXG4vLyBzZXQgdXAgZm9ybSBoaWRlciBhbmQgYXBwZWFyZXJcclxuLy8gY3JlYXRlIGRvbSBtYW5pcHVsYXRpb24gbW9kdWxlXHJcblxyXG5jb25zdCBmb3JtID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBmb3JtQ3JlYXRpb24gPSAoZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGJ1dHRvbiBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpPT09bnVsbCl7Ly9pZiBmb3JtIGhhcyBub3QgYmVlbiBjcmVhdGVkIGFscmVhZHlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlcmUgYXJlIG5vIGZvcm1zXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAnZm9ybS1jb250YWluZXInO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRm9ybUVsZW1lbnQodHlwZSwgZGVzY3JpcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gJ2J1dHRvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGFiZWwuZm9yID0gYCR7ZGVzY3JpcHRpb259YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBgJHtkZXNjcmlwdGlvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0LWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb24ob3B0aW9uVGV4dCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gb3B0aW9uVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKCdOb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignTWVkaXVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbignSGlnaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb3B0aW9uTm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25Ob25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbk1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbk5vbmUudmFsdWUgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbkxvdy52YWx1ZSA9ICdsb3cnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25NZWRpdW0udmFsdWUgPSAnbWVkaXVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uSGlnaC52YWx1ZSA9ICdoaWdoJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uTm9uZS52YWx1ZSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uTG93LnZhbHVlID0gJ2xvdyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbk1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25IaWdoLnZhbHVlID0gJ2hpZ2gnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5hbWUgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9ybUVsZW1lbnQoJ2lucHV0JywnVGl0bGUnKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm1FbGVtZW50KCdpbnB1dCcsJ0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnaW5wdXQnLCdEdWUtRGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9ybUVsZW1lbnQoJ3NlbGVjdCcsJ1ByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnYnV0dG9uJywnc3VibWl0JywgJ3N1Ym1pdCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIFRvRG9zLmNyZWF0ZVRvRG8oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IFRvRG9zID0gKGZ1bmN0aW9uICgpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVE9ETyBjcmVhdGVkIVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgIH1cclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=