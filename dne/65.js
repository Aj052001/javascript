


// // 1. Array .sort Method
// // Question 1:
// // Sort the array const words = ['banana', 'apple', 'cherry', 'date'];

// // Question 2:
// // Sort the array const prices = [199.99, 9.99, 49.99, 399.99, 0.99]; in ascending order.

// // 2. Array .find Method
// // Question 1:
// // Find the first name with more than 4 letters in const names = ['John', 'Doe', 'Amy', 'Alexandra'];.

// // 3. Array .every Method
// // Question 1:
// // Check if all scores are greater than 75 in const scores = [90, 80, 85, 88];.

// // Question 2:
// // Check if all ages are 18 or older in const ages = [18, 21, 17, 20];.

//     // value >= 18
// // 4. Array .some Method
// // Question 1:
// // Check if any temperature is below freezing (less than 32) in const temperatures = [30, 40, 25, 15];.

// // 5. Array.prototype.fill Method
// // Question 1:
// // Create an array of length 7, filled with the number 3.


// const array = new Array(7).fill(3)

// console.log(array)


// // Question 2:
// // Replace all values in const grades = [1, 2, 3, 4, 5]; with 0.




// splice method 
// start , delete , insert 

// const myArray = ['item1', 'item2', 'item3'];

// const deletedItem = myArray.splice(1, 0);

// // console.log(deletedItem)

// console.log(myArray)

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("delted item", deletedItem);
// console.log(myArray);



// const  products  = [
//   {productId : 1 , productName:"speaker",price : 5000,brand:"boat"},
//   {productId : 2 , productName:"bluetooth",price : 5000,brand:"jbl"},
//   {productId : 3 , productName:"speaker",price : 400,brand:"boat"},
//   {productId : 4 , productName:"speaker",price : 5000,brand:"jbl"},
//   {productId : 4 , productName:"speaker",price : 300,brand:"jbl"},
// ]

//filter data brand boat  //lokendra , shivraj , himanshu

//   const ans = products.filter((product)=>{
//     return product.brand === "boat" && product.brand === "jbl"
//  })

//  console.log(ans)

// every price 5000  //llkendra,ravi,himanshu,(yuv, narendra,shiv,anshu)

// const ans = products.every((product)=>{
//     return product.price === 5000
//  })
//  console.log(ans)

// sort krna hai assending order low to high 

// const ans = products.slice(0).sort((a,b)=>{
//     return a.price - b.price
//  })
//  console.log(ans)

//  new array only for productName map //lokendra,ravi,himanshu


// const ans = products.map((value)=>{
//     return value.productName
//  })
//  console.log(ans)






// const  products  = [
//   {productId : 1 , productName:"speaker",price : 5000,brand:"boat"},
//   {productId : 2 , productName:"bluetooth",price : 5000,brand:"jbl"},
//   {productId : 3 , productName:"speaker",price : 400,brand:"boat"},
//   {productId : 4 , productName:"speaker",price : 5000,brand:"jbl"},
//   {productId : 4 , productName:"speaker",price : 300,brand:"jbl"},
// ]


// const data = products.map((product)=>{
//     return product.brand
// })


// const uniqueData = new Set(data)

// console.log(uniqueData)




