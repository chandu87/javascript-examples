console.log("HI");


var x = 5;

function test2() {

  function test1() { // -> linked to test2 scope (not linked to the window/global/main/ something anymore)
    const varInsideTest1 = 'test1';
    //debugger;
    console.log(x);
    console.log(varInsideTest2);
  }

  const varInsideTest2 = 'test2';
  return test1;
}

var t = test2();
t();

//console.log(varInsideTest2);