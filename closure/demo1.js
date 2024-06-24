function closure(){
    console.log("closure function");
    let i = "i am from closure";
    setTimeout(function printClosureValue(){
        console.log(i);
    },5000)
}

closure();