// map method 
// const numbers = [3,4,6,1,8];

//  const data  = numbers.map((value,index)=>{
//             return value*value
//  });

// console.log(data);

// const products = [
//     { id: 1, name: 'Sunscreen', price: 99.99, image: '/image/sunscreen.jpeg' },
//     { id: 2, name: 'Detan face wash', price: 149.99, image: '/image/sunscreen.jpeg' },
//     { id: 3, name: 'Detan Kit', price: 199.99, image: '/image/sunscreen.jpeg' },
//     { id: 4, name: 'Pimple gel', price: 99.99, image: '/image/sunscreen.jpeg' },
//     { id: 5, name: 'Pimple face wash', price: 149.99, image: '/image/sunscreen.jpeg' },
//     { id: 6, name: 'Blemish gel', price: 199.99, image: '/image/sunscreen.jpeg' },
//     { id: 7, name: 'Blemish face wash', price: 99.99, image: '/image/sunscreen.jpeg' },
//     { id: 8, name: 'Fairness cream with SPF 20', price: 149.99, image: '/image/sunscreen.jpeg' },
//     { id: 9, name: 'Fairness moisturiser with SPF 25', price: 199.99, image: '/image/sunscreen.jpeg' },
//     { id: 10, name: 'P++ lotion', price: 99.99, image: '/image/sunscreen.jpeg' },
//   ];

// const userNames = products.map((product)=>{
//     return `${product.id} product name is ${product.name} product price is ${product.price} and product image is ${product.image}`;
// });

// console.log(userNames);

// Print Each Element of an Array:
// Iterate over an array and print each element.

// Sum of All Elements in an Array:
// Calculate the sum of all numbers in an array.

// Capitalize First Letter of Each Word:
// Convert the first letter of each word in an array to uppercase.

// Filter Even Numbers and Print Them:
// Print only even numbers from an array.

// Count Frequency of Elements in an Array:
// Count how many times each item appears in an array.

// const array = [1,2,3,4,5]

// {
//     1,1
//     2,1
//     3,2
//     4,3
//     5,2
// }

// const array = [1, 2, 3, 4, 5, 1, 2, 3, 1, 4, 5, 5];

// const countFrequency = (arr) => {
//   const frequency = {};

//   arr.forEach((item) => {
//     frequency[item] = (frequency[item] || 0) + 1;
//   });

//   return frequency;
// };

// console.log(countFrequency(array));



// Square Each Number in an Array:
// Return a new array with each number squared.

// Convert Temperatures from Celsius to Fahrenheit:
// Convert an array of Celsius temperatures to Fahrenheit.
// Extract Names from an Array of Objects:
// Extract only the names from an array of user objects.
// Add a Suffix to Each String in an Array:
// Add " - done" to each task in an array.
// Convert Strings to Numbers:
// Convert an array of numeric strings to actual numbers.
// const numbers = [3,4,6,1,8];
// const newArray = numbers.map((value,index)=>{
//      return value*2
// // }
// // )
// // console.log(newArray)
// // const array = [1,2,3,4,5]
// // const newArray = array.map(function(item){
// //     return (item*item)
// // })
// // console.log(newArray)

// //backend
// const products = [
//     { id: 1, name: 'Sunscreen', price: 99.99, image: '/image/sunscreen.jpeg' },
//     { id: 2, name: 'Detan face wash', price: 149.99, image: '/image/sunscreen.jpeg' },
//     { id: 3, name: 'Detan Kit', price: 199.99, image: '/image/sunscreen.jpeg' },
//     { id: 4, name: 'Pimple gel', price: 99.99, image: '/image/sunscreen.jpeg' },
//     { id: 5, name: 'Pimple face wash', price: 149.99, image: '/image/sunscreen.jpeg' },
//     { id: 6, name: 'Blemish gel', price: 199.99, image: '/image/sunscreen.jpeg' },
//     { id: 7, name: 'Blemish face wash', price: 99.99, image: '/image/sunscreen.jpeg' },
//     { id: 8, name: 'Fairness cream with SPF 20', price: 149.99, image: '/image/sunscreen.jpeg' },
//     { id: 9, name: 'Fairness moisturiser with SPF 25', price: 199.99, image: '/image/sunscreen.jpeg' },
//     { id: 10, name: 'P++ lotion', price: 99.99, image: '/image/sunscreen.jpeg' },
//   ];

// const callback = ()=>{
//         const data = products;
//         return data ;
// }

// const handleData = ()=>{
//          console.log("before getting data")
//          const data = callback();
//          console.log(data);
//          console.log("after getting data")

// }

// handleData(callback)


//forEach, map, filter , reduce 




// function findNumber (value,index){
//    console.log(value)
//    return value*2;
// }

// const newArray = array.map((value,index)=>{
//    console.log(value)
//    return value*2;
// })
// console.log(newArray)

// const  products  = [
//   {productId : 1 , productName:"speaker",price : 5000,brand:"boat"},
//   {productId : 2 , productName:"bluetooth",price : 5000,brand:"jbl"},
//   {productId : 3 , productName:"speaker",price : 5000,brand:"boat"},
//   {productId : 4 , productName:"speaker",price : 5000,brand:"jbl"},
//   {productId : 4 , productName:"speaker",price : 5000,brand:"jbl"},
 
// ]


// const total  = products.reduce((acccumulator , reducor)=>{
   
//   return  acccumulator + reducor.price;
// },0)
// console.log(total)

// const prices = [199.99, 9.99, 49.99, 399.99, 0.99];

// const newPrices = prices.sort((a,b)=>{

//     return b-a


// })
// console.log(newPrices)


// const array = [1,2,3,4,5]

//  const ans = array.reduce((acccumulator,reducor)=>{
//   return acccumulator + reducor;
// },100)

// console.log(ans)






// filter

         

 //   sort method

// Sort the array const words = ['banana', 'apple', 'cherry', 'date'];


// const words =  ['banana', 'apple', 'cherry', 'date'];

//  words.sort()

// console.log(words)



// Sort the array const prices = [199.99, 9.99, 49.99, 399.99, 0.99]; in ascending order.


// const prices = [199.99, 9.99, 49.99, 399.99, 0.99];

// const newPrices = prices.sort((a,b)=>{

//     return b-a


// })
// console.log(newPrices)


// 2. Array .find Method

// Question 1

// Find the first name with more than 4 letters in const names = ['John', 'Doe', 'Amy', 'Alexandra'];


// const names = ['John', 'Doe', 'Amy', 'Alexandra'];

// function islength (value) {
// return value.length  === 3

// }
// const ans = names.find(islength)

// console.log(ans)

// 3. Array .every Method
// Question 1:
// Check if all scores are greater than 75 in const scores = [90, 80, 85, 88];.


// const scores = [90, 80, 85, 88];


// const newScores = scores.every((value)=>{
// return value%2

// })
// console.log(newScores)


// Question 2:
// Check if all ages are 18 or older in const ages = [18, 21, 17, 20];.

// const ages = [18, 21, 17, 20];

// const newAges = ages.every((value)=>{
// return value<=18


// })
// console.log(newAges)


         // 4. Array .some Method

// Question 1:

// Check if any temperature is below freezing (less than 32) in const temperatures = [30, 40, 25, 15];.

// const temperatures = [30, 40, 25, 15];

// const newTemperatures = temperatures.some((value)=>{
// return value>32

// })
// console.log(newTemperatures)

// 5. Array.prototype.fill Method
// Question 1:
// Create an array of length 7, filled with the number 3

// const array = [1,2,3,4,5,6,7];

// array.fill(0,2,5)
// console.log(array)

// Question 2:
// Replace all values in const grades = [1, 2, 3, 4, 5]; with 0.



// const grades = [1, 2, 3, 4, 5];

// grades.fill(0,0,6)
// console.log(grades)



const  products  = [
  {productId : 1 , productName:"speaker",price : 5000,brand:"boat"},
  {productId : 2 , productName:"bluetooth",price : 50,brand:"jbl"},
  {productId : 3 , productName:"speaker",price : 500,brand:"boat"},
  {productId : 4 , productName:"speaker",price : 50000,brand:"jbl"},
  {productId : 4 , productName:"speaker",price : 500,brand:"jbl"},
]


const filterData = products.filter((product)=>{
    if(product.brand === "jbl")
    {
        return product;
    }
})

console.log(filterData)
const priceData = filterData.map((item)=>{
    return item.price
})


console.log(priceData)
const ans = priceData.reduce((acc,red)=>{
    return acc+red
})

console.log(ans)
// brand = "jbl"  uski sari price calculate krna hai 


