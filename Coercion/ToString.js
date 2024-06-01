let obj = {};
console.log(obj.toString());
console.log(typeof obj.toString());

// overwirte toString() method

let obj1 = {
    toString(){
        // by default gives [object Object]
        return "I am overwrite toString() method"
    }
};

console.log(obj1.toString());
console.log(typeof obj1.toString());