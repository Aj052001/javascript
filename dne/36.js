// // objects reference type  
// // arrays are good but not sufficient 
// // for real world data 
// // objects store key value pairs 
// // objects don't have index
// // how to create objects 

// // const person = {name:"Harshit",age:22};
// const person = {
//     name: "harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);

// // how to access data from objects 
// // console.log(person["name"]);
// // console.log(person["age"]);
// // console.log(person.hobbies);

// // how to add key value pair to objects
// person["person"] = "male";
// console.log(person);

// let firstName = "Ravi"
// let lastName = "Singh"
// let password = "123456"
// let age = 19

// const data = {
//      firstName : `${firstName}`,
//      lastName :`${lastName}`,
//      password :`${password}`,
//      age : `${age}`,
// }
// console.log(data)
// console.log(typeof(data))
// console.log(Array.isArray(data))

const [a,[b],c] = [13,[2,4],5]

console.log(b)