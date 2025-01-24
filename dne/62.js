// every method
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
// ]


// const ans = userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);



// const numbers = [2,4,6,9,10];

// const ans = numbers.every((value)=>{
//     return value%2 === 0
// })


// console.log(ans)

const numbers = [7,7,7,8,5];

const ans = numbers.some((value)=>{
    return value%2 === 0
})

console.log(ans)


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 55000},
// ]


// const ans = userCart.every((item)=>{
//               return item.price < 40000
// }) 

// console.log(ans)