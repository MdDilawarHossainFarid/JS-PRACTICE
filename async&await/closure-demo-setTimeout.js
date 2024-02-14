function DO(task){
    setTimeout(function exec() {
        console.log(task)
    }, 3000);
}
DO();
console.log("end");