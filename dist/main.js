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

    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click',()=>{
        console.log("addbutton clicked");
        
        if (document.getElementsByTagName('form').length===0){//if form has not been created already
            console.log("there are no forms");
            let form = document.createElement('form');
            document.body.appendChild(form);

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
                    element.innerText = description;
                }
                
                form.appendChild(formDiv);
                formDiv.appendChild(element);
                element.name = description;
            }

            createFormElement('input','Title');
            createFormElement('input','Description');
            createFormElement('input','Due-Date');
            createFormElement('input','Priority');
            createFormElement('button','submit', 'submit');

            document.getE
        }
    })


const ToDos = (function (){
    function createToDo(){

    }

    return {
        createToDo,
    }
})




//     <form action="" method="get" class="form-example">
//   <div class="form-example">
//     <label for="name">Enter your name: </label>
//     <input type="text" name="name" id="name" required>
//   </div>
//   <div class="form-example">
//     <label for="email">Enter your email: </label>
//     <input type="email" name="email" id="email" required>
//   </div>
//   <div class="form-example">
//     <input type="submit" value="Subscribe!">
//   </div>
// </form>
    return {

    }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQsa0RBQWtELFlBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvIGRvXHJcbi8vIHNldCB1cCBsaXZlIHNlcnZlclxyXG4vLyBmaWd1cmUgb3V0IGhvdyB0byBnZW5lcmF0ZSB0aGUgaHRtbCBhcyB3ZWxsXHJcbi8vIHNldCB1cCBhIGZvcm1cclxuLy8gc2V0IHVwIGZvcm0gaGlkZXIgYW5kIGFwcGVhcmVyXHJcbi8vIGNyZWF0ZSBkb20gbWFuaXB1bGF0aW9uIG1vZHVsZVxyXG5cclxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZGJ1dHRvbiBjbGlja2VkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpLmxlbmd0aD09PTApey8vaWYgZm9ybSBoYXMgbm90IGJlZW4gY3JlYXRlZCBhbHJlYWR5XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlcmUgYXJlIG5vIGZvcm1zXCIpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1FbGVtZW50KHR5cGUsIGRlc2NyaXB0aW9uKXtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSAnYnV0dG9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExhYmVsLmZvciA9IGAke2Rlc2NyaXB0aW9ufWBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBgJHtkZXNjcmlwdGlvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChlbGVtZW50TGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1EaXYpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQubmFtZSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnaW5wdXQnLCdUaXRsZScpO1xyXG4gICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnaW5wdXQnLCdEZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnaW5wdXQnLCdEdWUtRGF0ZScpO1xyXG4gICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnaW5wdXQnLCdQcmlvcml0eScpO1xyXG4gICAgICAgICAgICBjcmVhdGVGb3JtRWxlbWVudCgnYnV0dG9uJywnc3VibWl0JywgJ3N1Ym1pdCcpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuY29uc3QgVG9Eb3MgPSAoZnVuY3Rpb24gKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuXHJcbi8vICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJnZXRcIiBjbGFzcz1cImZvcm0tZXhhbXBsZVwiPlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJmb3JtLWV4YW1wbGVcIj5cclxuLy8gICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+RW50ZXIgeW91ciBuYW1lOiA8L2xhYmVsPlxyXG4vLyAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzPVwiZm9ybS1leGFtcGxlXCI+XHJcbi8vICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbnRlciB5b3VyIGVtYWlsOiA8L2xhYmVsPlxyXG4vLyAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZD5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzPVwiZm9ybS1leGFtcGxlXCI+XHJcbi8vICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlIVwiPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyA8L2Zvcm0+XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==