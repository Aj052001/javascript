// how to iterate object 
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }





//how to iterate object
// for in loop 
// Object.keys 


// for in loop 
const obj = {
    firstName :"ajay",
    lastName :"singh",
    age :22,
    gender : "Male",
    course:"Btech"
}


// for (let key in obj)
// {
//     console.log(obj[key])
// }

// Object.keys(obj)
// console.log(Object.keys(obj))
const keys = Object.keys(obj)


// console.log(keys)

for(let item of keys)
{
    console.log(obj[item])
}

// Task 1: Create an Object and Access Properties
// Create an object with three key-value pairs (e.g., name, age, city).
// Access and log each property using dot notation and bracket notation.


// Task 2: Add a New Property to an Object
// Create an object with two key-value pairs.
// Add a new property to the object and log the updated object.

// Task 3: Update a Property Value
// Create an object with three key-value pairs.
// Update the value of one property and log the updated objec

// Task 4: Add and Update Properties in an Object
// Create an object.
// Add new key-value pairs and update existing values.


// Task 5: Iterate Through an Object using Object.keys
// Create an object with at least 5 key-value pairs.
// Iterate over the object and log the keys and values.


// Task 6: Iterate Through an Object Using for...in 
// Create an object with at least 5 key-value pairs.
// Iterate over the object and log the keys and values.