const promise = new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve("Hiii");
},2000);

});

promise.then((message)=>{
console.log(message);
return "hello";
})
.then((arg)=>{
console.log(arg);
});