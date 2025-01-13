// important array methods 

//  const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(myFunc(number,index));

// // numbers.forEach(function(number, index){
// //     console.log(number*3, index);
// // })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// // users.forEach(function(user){
// //     console.log(user.firstName);
// // });

// // users.forEach((user, index)=>{
// //     console.log(user.firstName, index);
// // })

// // for(let user of users){
// //     console.log(user.firstName);
// // }




// for(let number in numbers)
// {
//     console.log(`${number} and ${numbers[number]}`)
// }




// printValue(0,numbers[0])
// printValue(1,numbers[1])
// printValue(2,numbers[2])


// for(let i = 0;i<numbers.length;i++)
// {
//     printValue(i,numbers[i]);
// }



const numbers = ["Kartik","Ravi","Narendra","Shivraj","Lokendra"];
const printValue = (value,index)=>{
    console.log(` ${index+1}  ${value}`)
}



numbers.forEach(printValue)

