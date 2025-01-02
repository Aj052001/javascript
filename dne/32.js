// // while loop in array 
// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);




let fruits = ["apple", "mango", "grapes", "banana"];
let newArray = [];

let i = 0;
while(i<= fruits.length-1)
{
    newArray.push(fruits[i].toUpperCase());
    i++;
}

console.log(newArray)