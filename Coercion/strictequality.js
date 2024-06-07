// console.log(NaN === NaN);
// console.log("NaN" === NaN);
// console.log(-0 === +0);

let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {x:10};
console.log(obj1 === obj2)
console.log(obj1 === obj3)
console.log(obj1 === obj1) //same memory location &  same object
console.log({x:10} === {x:10}) //differant  memory location & differant  object
