 
//object destructing & sets,Maps
let calculate = ({quantity, price = 10, tax = 0.15}) => {
    console.log(quantity);
    console.log(price);
    console.log(tax);
    return quantity * price * tax;
  }
  
  console.log(calculate({quantity: 10})); // 15
//   console.log(calculate({quantity: 10,price: 11})); //16.5
//   console.log(calculate({tax: 0.25, quantity:10})); // 25


//set properties


let set = new Set();
set.add({a: 1, b: 2, c: 3, d: 4});

for (let [key, value] of set.entries()) {
  console.log(key ,value);
}

//symbol 
let name = Symbol();
let details = {};
details[name] = 'Prashant Yadav';
console.log(details[name]);
//"Prashant Yadav"

let fullName = ssymbol();
console.log(fullName);
