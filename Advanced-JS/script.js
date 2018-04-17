

// var Person = function(name,yearOfBith,occupation){
//     this.name = name;
//     this.yearOfBirth = yearOfBith;
//     this.occupation = occupation;

// };

// Person.prototype.calculateage = function(){
//     console.log("calculate");
// };
// var jhon = new Person("Jhon",23,"teacher");
// console.log(jhon.name);
// console.log(jhon.calculateage());  
// console.log(jhon.hasOwnProperty('name'));
// jhon instanceof Person; //true

// var obj1 = {name :'jhon',age:23};
// var obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj1.age = 25;
// console.log(obj1.age);
// console.log(obj2.age);
// obj2.name = "jen";
// console.log(obj1.name);
// console.log(obj2.name);

// var age = 20;
// var fruits = {
//     apples :1,
//     mangos :3
// };

// function changeObj(a,b){
//     a = 30;
//     b.mangos = 20;
// }
// changeObj(age,fruits);
// //when you pass primitivs only value passed not the reference
// console.log(age);

// //reference is passed when you pass object so the value changes
// console.log(fruits.mangos);

// //// immediately invoked functions
// (function(){
//     let randNum = Math.random() * 10;
//     console.log("random num "+randNum);
// })();

// ///>>>>>>>>><<<<<<<<<<<<closuers

// function retirement(age){
//     let a = "retirement age is ";
//     return function(yearBirth){
//         console.log(a + age + " year of Birth is"+ yearBirth);
//     }
// }
// var retirementAge = retirement(60);
// retirementAge(2025);
// retirement(63)(2028);

// let retirementAgeUs = retirement(66);
// let retirementAgeGermany = retirement(65);
// retirementAgeUs(2023);
// retirementAgeGermany(2024);

// function interviewQuestion(job){
//     return function(name){
//         if( job === "designer"){
//             console.log(name +" can you explain who is "+ job + " ?");
//         }
//         else if(job === "teacher"){
//             console.log(name + " can you explain who is " + job + " ?");
//         }
//         else{
//             console.log(name + " can you explain who is doctor ?");
//         }
//     };
// }
// interviewQuestion('designer')('jhon');
// interviewQuestion('teacher')('jhon');
// interviewQuestion('jahs')('jhon');


////>>>>>>Bind >>>>>>>>>>>call >>>>>>>>>>>>>apply
var jhon = {
            name : 'Jhon',
            age : 29,
            job : 'teacher',
            greeting:function(greet,timeOfDay){
                    if(greet === 'formal'){
                        console.log( "My name is "+ this.name + " , I am " + this.age + " years old"
                        +" and I am a "+this.job + " Have a good "+timeOfDay);
                    }
                    else if(greet === 'casual'){
                        console.log( "Hey Whatsup , I am "+ this.name + " , I am " + this.age + " years old"
                        +" and I am a "+this.job +" Have a good "+ timeOfDay);
                        }
                    else{
                        console.log( "My name is "+ this.name + " , I am " + this.age + " years old"
                        +" and I am a "+this.job);
                    }
            }
};
jhon.greeting('formal','evening');
var emily = { 
                name : 'emily',
                age:26,
                job : 'doctor'
            };
jhon.greeting.call(emily,'casual','morning');

var jhonBind = jhon.greeting.bind(jhon,"formal");
jhonBind("night");


var yearArray = [1990,1995,2001,1987];

function arrayCalculate(arrayAges,fun){
    let arrayResult = [];
    for(let i = 0; i < arrayAges.length; i++){
        arrayResult.push(fun(arrayAges[i]));
    }
    return arrayResult;
}
function calculateAge(yearOfBirthh){
    return 2018 - yearOfBirthh;
}
function calculateAgeLimit(limit,age){
    return age >= limit;
}
ages = arrayCalculate(yearArray,calculateAge);
console.log(arrayCalculate(ages,calculateAgeLimit.bind(this,20))); // assigning a preset value for the function

