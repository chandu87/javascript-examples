

var Person = function(name,yearOfBith,occupation){
    this.name = name;
    this.yearOfBirth = yearOfBith;
    this.occupation = occupation;

};

Person.prototype.calculateage = function(){
    console.log("calculate");
};
var jhon = new Person("Jhon",23,"teacher");
console.log(jhon.name);
console.log(jhon.calculateage());  
console.log(jhon.hasOwnProperty('name'));
jhon instanceof Person; //true

var obj1 = {name :'jhon',age:23};
var obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj1.age = 25;
console.log(obj1.age);
console.log(obj2.age);
obj2.name = "jen";
console.log(obj1.name);
console.log(obj2.name);

var age = 20;
var fruits = {
    apples :1,
    mangos :3
};

function changeObj(a,b){
    a = 30;
    b.mangos = 20;
}
changeObj(age,fruits);
//when you pass primitivs only value passed not the reference
console.log(age);

//reference is passed when you pass object so the value changes
console.log(fruits.mangos);