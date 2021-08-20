let add = document.querySelector('.add');
let input = document.querySelector('input');
let list = document.querySelector('.listContainer');


input.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        addItemToList(input.value);
        input.value = "";
    }
})

add.addEventListener('click',function(){
    addItemToList(input.value);
    input.value = "";
})


function addItemToList(text){

    let newElement = document.createElement('div')
    newElement.className = "newElement";

    let newButton = document.createElement('span')
    newButton.className = "material-icons"
    newButton.innerHTML = "delete"
    newButton.addEventListener('click',()=>{
        newElement.remove();
    })
    //new textbox
    let newText = document.createElement('div')
    newText.innerHTML = `${text}`;
    newText.className = "newText"

    newElement.appendChild(newText);
    newElement.appendChild(newButton);

    list.appendChild(newElement);
}