// reduce 
// const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000






// const numbers = [1764,1312,510,599,6249,1699,4499];
// const deliveryCharge = 29
// const data = numbers.reduce((accumulator,reducer)=>{
//     return accumulator + reducer;
// },0)
// console.log(data)
// console.log(`Secured Packaging Fee                               ₹${deliveryCharge}`)
// const totalAmount = data + deliveryCharge;
// console.log(`Total Amount                                        ₹${totalAmount}`)





//foreach , map , filter , reduce 


// const array = [1,2,3,4,5,6]


// const newArray = array.forEach(function(value){
//     console.log(value*value)
//      return value*value
// })

// console.log(newArray)

// const array = [1,2,3,4,5,6]


//  const newArray = array.map((value,index)=>{
//     console.log(value*value)
//      return (`index ${index} value is ${value}`)
// })

// console.log(newArray)


// const array = ['boat','noise','jbl','realme' ]

// const newArray = array.filter((value)=>{
//     return value == "jbl";
    
// })


// console.log(newArray)

// const array = [1,2,3,4,5,6]

// const data = array.reduce((accumulator,reducor)=>{
//     return accumulator + reducor;
// },1000)

// console.log(data)


// Filter Even Numbers:
// Given an array of numbers, write a function that filters out the even numbers.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Expected output: [2, 4, 6, 8, 10]


// Filter Strings Longer Than 5 Characters:
// Given an array of strings, filter out the strings that have more than 5 characters.
// const words = ["apple", "banana", "pear", "grape", "pineapple"];
// // Expected output: ["banana", "pineapple"]

// Sum of All Numbers:
// Use reduce to calculate the sum of all numbers in an array.
// const numbers = [1, 2, 3, 4, 5];
// // Expected output: 15

// Count Occurrences of Words:
// Given an array of words, use reduce to count how many times each word appears.
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // Expected output: { apple: 3, banana: 2, orange: 1 }


// const data = [2, 4, 6, 8, 10]


// const and = data.reduce((accumulator,reducor)=>{
// return accumulator + reducor
// },10)

// console.log(and)

// const and = data.filter((value)=>{
// return value>5
// },10)

// console.log(and)