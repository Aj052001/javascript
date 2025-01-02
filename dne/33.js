// // for of loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// // for(let fruit of fruits){
// //     fruits2.push(fruit.toUpperCase());
// // }
// // console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }



const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
let newArray = [];

//for in loop

// for(let i = 0;i<=fruits.length-1;i++)
// {
//     console.log(fruits[i])
// }


for(let fruit in fruits)
{
    newArray.push(fruits[fruit])
}

console.log(newArray)