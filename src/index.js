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