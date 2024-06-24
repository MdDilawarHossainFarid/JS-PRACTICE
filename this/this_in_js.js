// "use strict"

// this in global space

console.log(this); // global object - window in browser and global in node it depends on where js is run

// this is function 

function fun(){
    // the value depends on strict / non strict mode
    console.log(" this in function :",this);
}

fun(); undefined

window.fun(); window

/* this inside non-strict mode - (this substitution)

if the value this keyword is undefined or null 
this key word will be replaced with global object
only in non strict mode

this key word value depends on how the function is called (window)

*/

let obj = {
    a : 111,
    b : function(){
        console.log(typeof this);
        console.log(this.a)
    },
    c : () =>{
        console.log(typeof this);
        console.log(this.a)
    }
}

obj.c();