// if a variable is not use outside of block then not use var insted used let

function swap(x, y){
    if(x > y){
        // var temp = x;
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x ;
}
swap(6,4);

// redeclation in let does not allow
// let a = 1;
// let a = 12;

