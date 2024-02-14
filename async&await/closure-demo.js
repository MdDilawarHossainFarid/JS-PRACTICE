function process(){
    let i = 0;
    let j = [1,2,3];
    let k = 10;
    function innerProcess(){
        i += 1;
        console.log(j);
        return i;
    }
    return innerProcess; //not calling the function , just returing funtion
}

let x = process();
console.log(x());
console.log(x());