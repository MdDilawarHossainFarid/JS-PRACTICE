let obj = {}

// console.log(10 - obj); //obj.valueof  --> object , toString --> [object object]

let obj1 = {a : 50, valueOf(){
    return 2;
}}

// console.log(4 - obj1);

let obj3 = {a:50, toString(){
    return "10"
}};

console.log(30 - obj3);

let  obj4 = {
    b: 40,
    toString(){
        return {}
    }
}

console.log(100 - obj4);
