function CarsFactory(car, speed){
    let obj = {
        changeSpeed : function(newSpeed){
            return speed = newSpeed;
        },
        changeName : function(newName){
            return car = newName;
        },
        getSpeed : function(){
            return speed;
        },
        getName : function(){
            return car;
        }
    }
    return obj;
}
const tesla = CarsFactory("Tesla s", 100);
console.log(tesla.getSpeed());
console.log(tesla.getName());
console.log(tesla.changeSpeed(200));
console.log(tesla.changeName("BMW"));
console.log(tesla.getSpeed());
console.log(tesla.getName());