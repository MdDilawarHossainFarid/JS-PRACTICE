function addPrices(prevResult, currValue){
    let newPrice = prevResult.price + currValue.price;
    return {price: newPrice};
}


let cart = [{price:100000, name:"iphone"}, {price:600, name:"cover"}];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice, totalPrice.price)