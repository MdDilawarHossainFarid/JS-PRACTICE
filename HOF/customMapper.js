const newArr = [9,8,7,6,5];

function print(element, idx){
 return `Element at index ${idx} is ${element}`
}

const result1 = newArr.map(print)
console.log(result1)



function customMapper(arr, func){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i],i)
        result.push(func(arr[i], i));
    }
    console.log(result);
return result;
}

const value = customMapper(newArr, print);
console.log(value);