function process() {
    let i = 0;
    function innerProcess() {
        i += 1; 
        return i;
    }
    return innerProcess;
}

x = process();

let obj = {func:x} 
obj//see in browser 
//open obj -> {func:f} -> [[Scopes]] -> Closure { i: 0}
