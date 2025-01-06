// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [{firstName : firstNameOfUserOne ,gender : genderOfUserOne},,{firstName}] = users
console.log(firstName)



// // objects inside array 
// // very useful in real world applications

// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.firstName);
// }


// // object destructuring
// const band = {
//   bandName: "led zepplin",
//   famousSong: "stairway to heaven",
//    data :{firstName:"ajay"},
//   year: 1968,
//   anotherFamousSong: "kashmir",
// };

// let { bandName, famousSong,data:{firstName}, ...restProps } = band;
// console.log(firstName)
// console.log(bandName);
// console.log(restProps);

// // spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];
// // const newArray = [..."123456789"];
// console.log(newArray);

// computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";





// const obj = {
//     [key1] : value1,
//     [key2] :value2
// }

// console.log(obj)


// 1. Create and Access Object Properties
// Create an object person with the properties name, age, and city. Access and log each property to the console.

// 2. Add and Delete Properties
// Create an object car with properties brand and model. Add a new property year with a value and then delete the model property. Log the final object.

// 3. Nested Objects
// Create an object student with properties name and marks, where marks is another object with subjects as keys (math, science) and their scores as values. Log the score for math.

// 4. Use Spread Operator with Objects
// Create two objects:

// obj1 with properties a: 1 and b: 2
// obj2 with properties c: 3 and d: 4
// Combine them into a new object obj3 using the spread operator and log the result.
// 5. Computed Properties
// Create an object profile with computed property keys:

// Use const variables for the keys (e.g., key1 = "username", key2 = "email").
// Assign some values (e.g., "john_doe" and "john@example.com") to these keys.
// Log the object to verify the computed properties.