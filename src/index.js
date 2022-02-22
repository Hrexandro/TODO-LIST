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
