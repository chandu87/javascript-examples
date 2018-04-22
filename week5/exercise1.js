console.log("HI excersie 1 ====>");

let ulItems = document.querySelector("#items");
let btn = document.querySelector("#btn");
let count = 1;

btn.addEventListener('click',addListItem);

function addListItem(){

    let li = document.createElement('li');
    li.textContent= "Item " + count++;
    ulItems.appendChild(li);
}

