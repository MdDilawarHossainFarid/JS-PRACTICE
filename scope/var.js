// use case of var
// why let & var
// matter of choice
function fun(x){
    let i;
    console.log(i);
    if( x % 2 == 0){
      i = 0;
      console.log(i);
    } else {
        i = 1;
          console.log(i);
    }
}

// fun(4);

function fun1(x){
 
    if( x % 2 == 0){
      var i = 0;
      console.log(i);
    } else {
       var  i = 1;
          console.log(i);
    }
}

fun1(4);

// redeclation in var 

var a = 9;
var a = 10;