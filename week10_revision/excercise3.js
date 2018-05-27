var name2 = "Majid"; // const ???????????????????????????
const obj = {
    name2 : 'chandu',
    sayHi : function(){
        console.log('hello ' + this.name2);
    }
};
const sayHi2 = obj.sayHi;
obj.sayHi();
sayHi2();
const obj2 = {
    name2 : "Richard"
}
const sayHi3 = obj.sayHi.bind(obj2); // we are binding obj2 to obj
sayHi3();