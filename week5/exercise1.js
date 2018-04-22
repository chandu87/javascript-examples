console.log("HI excersie 1 ------->");

let ulItems = document.querySelector("#items");
let btn = document.querySelector("#btn");

btn.addEventListener('click',addListItem);

function addListItem(){
    let li = document.createElement('li');
    li.textContent= "New List Item";
    ulItems.appendChild(li);
}

