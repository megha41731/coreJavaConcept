// function expressions and setTimeOut 
function x(a) {  
  function y(b) {
    function z(c) {
       return a + b + c;
     };

     return z;
  }
  
  return y;
};

// the outer function accepts an argument and returns a function
let a = x(1);

// the inner function also accepts an argument and returns the total of both
// outer and inner argument
let b = a(10);

let c = b(30);


var teacher ="suzy";
 var myteacher = function (){
    console.log(teacher);
 }
  teacher = "megha";
  myteacher();

  for(var i=0 ;i<=3;i++){
    setTimeout(function(){
        console.log(`i:${i}`)
        console.log(i);
    },1000);
  }
// 60