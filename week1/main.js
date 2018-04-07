console.log("hi  this is js");

var name="mark";
let x=2;

let y=4;
z=x+y;

// setTimeout("document.bgColor='white'", 1000)
// setTimeout("document.bgColor='lightpink'", 1500)
// setTimeout("document.bgColor = 'pink'", 2000)
// setTimeout("document.bgColor =  'deeppink'", 2500)
// setTimeout("document.bgColor = 'red'", 3000)
// setTimeout("document.bgColor = 'tomato'", 3500)
// setTimeout("document.bgColor = 'darkred'", 4000)

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

var years=[2001,1992,1993,1994];
var emptyArray = [];

for(var i = 0;i < years.length; i++){

    emptyArray[i] = 2018 - years [i];
}
console.log(years);
console.log(emptyArray);
for (var i = 0; i < emptyArray.length; i++){
    if(emptyArray[i] >= 18)
    {
        console.log("person born in "+years[i]+"s fullage now"+ emptyArray[i] )
    }
    else{
        console.log("person born in "+years[i]+"s is not fullage now"+ emptyArray[i] )
    }
}
function printFullAge(years){
    var ages = [];
    var output = [];
    for(var i = 0;i < years.length; i++){
        ages[i] = 2018 - years [i];
        if(ages[i] >= 18){
         output[i] = true;   
        }
        else{
            output[i]=false;
        }
    }
return output;
}
console.log(printFullAge(years));

// this varible scope

console.log(this);
rasmus();
function rasmus(){
    console.log(this);
}
//above it is refering to global object

var janaki = {
        name : "hana",
        age: 343,
        calc: function(){
            console.log(this);
        }
};
janaki.calc();
