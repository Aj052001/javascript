// for loop in array 

// let fruits = ["apple", "mango", "grapes", "banana"];

// // for(let i=0; i<=9;i++){
// //     console.log(i);
// // }

// // console.log(fruits.length);
// // console.log(fruits[fruits.length-2]);
// let fruits2 = [];
// for(let i=0; i < fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);





let fruits = ["apple", "mango", "grapes", "banana"];
let newArray = [];

for(let i = 0;i<= fruits.length-1;i++)
{
   newArray.push(fruits[i].toUpperCase())
}


console.log(newArray)

