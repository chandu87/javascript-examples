console.log("hi  this is js");

var name="mark";
let x=2;

let y=4;
z=x+y;

setTimeout("document.bgColor='white'", 1000)
setTimeout("document.bgColor='lightpink'", 1500)
setTimeout("document.bgColor = 'pink'", 2000)
setTimeout("document.bgColor =  'deeppink'", 2500)
setTimeout("document.bgColor = 'red'", 3000)
setTimeout("document.bgColor = 'tomato'", 3500)
setTimeout("document.bgColor = 'darkred'", 4000)

$(document).ready(function(){
    $("h1").text(typeof z);
});