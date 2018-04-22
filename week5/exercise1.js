console.log("HI excersie 1 ====>");

let ulItems = document.querySelector("ul#items");
let btn = document.querySelector("#btn");
let count = 1;

btn.addEventListener('click',addListItem);
btn.addEventListener('mouseover',addListItem);

function addListItem(){
    let li = document.createElement('li');
    li.textContent= "Item " + count++;
    ulItems.appendChild(li);
}

