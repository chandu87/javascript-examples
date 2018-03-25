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

setTimeout("document.f1.ta1.value = 'Answer Soon'", 1000)
setTimeout("document.f1.ta1.value = ''", 1300)
setTimeout("document.f1.ta2.value = 'Answer Soon'", 1600)
setTimeout("document.f1.ta2.value = ''", 1900)
setTimeout("document.f1.ta3.value = 'Answer Soon'", 2200)
setTimeout("document.f1.ta3.value = ''", 2500)
setTimeout("document.f3.ta4.value = 'Answer Soon'", 2800)
setTimeout("document.f3.ta4.value = ''", 3100)
setTimeout("document.f3.ta5.value = 'Answer Soon'", 3400)
setTimeout("document.f3.ta5.value = ''", 3700)
setTimeout("document.f3.ta6.value = 'Answer Soon'", 4000)
setTimeout("document.f3.ta6.value = ''", 4300)

$(document).ready(function(){
    $("h1").text(typeof z);
});