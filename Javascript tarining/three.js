//concept of Template literals and Strings
let a = 15;
function square(strings, value1){
  let str = strings[0]; //Square of
  let str2 = strings[1]; // is
  let num = value1; //${a} = 5;
  console.log(str);
  console.log(str2);
  return `${str} ${num } ${str2} ${num * num }`;
}

let output = square`Square of ${a} is`;
console.log(output);
//Square of  5  is 25
//destructing 


let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 
console.log(f());
console.log(a,b,c);
