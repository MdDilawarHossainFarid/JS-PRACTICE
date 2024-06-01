let obj = {a:9,
valueOf(){
// by default it returns the same object but you can over write
return 111;
}};
console.log(obj.valueOf())
console.log(typeof obj.valueOf())