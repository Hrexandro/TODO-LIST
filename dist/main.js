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
                        element.innerHTML = `
                        <option value="none">None</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRCxzREFBc0QsWUFBWTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdG8gZG9cclxuLy8gc2V0IHVwIGxpdmUgc2VydmVyXHJcbi8vIGZpZ3VyZSBvdXQgaG93IHRvIGdlbmVyYXRlIHRoZSBodG1sIGFzIHdlbGxcclxuLy8gc2V0IHVwIGEgZm9ybVxyXG4vLyBzZXQgdXAgZm9ybSBoaWRlciBhbmQgYXBwZWFyZXJcclxuLy8gY3JlYXRlIGRvbSBtYW5pcHVsYXRpb24gbW9kdWxlXHJcblxyXG5jb25zdCBmb3JtID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBmb3JtQ3JlYXRpb24gPSAoZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGJ1dHRvbiBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbnRhaW5lcicpPT09bnVsbCl7Ly9pZiBmb3JtIGhhcyBub3QgYmVlbiBjcmVhdGVkIGFscmVhZHlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlcmUgYXJlIG5vIGZvcm1zXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAnZm9ybS1jb250YWluZXInO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRm9ybUVsZW1lbnQodHlwZSwgZGVzY3JpcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gJ2J1dHRvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGFiZWwuZm9yID0gYCR7ZGVzY3JpcHRpb259YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBgJHtkZXNjcmlwdGlvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudExhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0LWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5Ob25lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5hbWUgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9ybUVsZW1lbnQoJ2lucHV0JywnVGl0bGUnKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm1FbGVtZW50KCdpbnB1dCcsJ0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnaW5wdXQnLCdEdWUtRGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlRm9ybUVsZW1lbnQoJ3NlbGVjdCcsJ1ByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnYnV0dG9uJywnc3VibWl0JywgJ3N1Ym1pdCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIFRvRG9zLmNyZWF0ZVRvRG8oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IFRvRG9zID0gKGZ1bmN0aW9uICgpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVE9ETyBjcmVhdGVkIVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgIH1cclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=