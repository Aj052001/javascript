// array destructuring 
// const myArray = ["value1", "value2", "value3","value4"];
// // let myvar1 = myArray[0];
// // let myvar2 = myArray[1];
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2", myvar2);
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);




// const myArray = ["value1","value2","vlaue3","value4",4,5,6];

// let [firstValue,secValue,...myNewArray] = myArray;

// //for loop 
// //indexing   

// // let firstValue = myArray[0]
// // let secValue = myArray[1]

// console.log(firstValue)
// console.log(secValue)
// console.log(myNewArray)


// const myArray = ["value1","value2"];

// const [firstValue,secValue] = myArray;

// console.log(firstValue)
// console.log(secValue)

//method 2 
// const myArray = ["value1","value2","value3"];

// const [firstValue,,secValue] = myArray;

// console.log(firstValue)
// console.log(secValue)

//method 3 
// const myArray = ["value1","value2","value3","value4"];
// const [firstValue,secValue,...myNewArray] = myArray;
// console.log(firstValue)
// console.log(secValue)
// console.log(myNewArray)

const array1 = [1,2,3,4]
const array2 = [...array1]


array1.push(5)
console.log(array1)
console.log(array2)




// const newArray = [...array]

// newArray.push(5)
// newArray.push(6)
// console.log(array)
// console.log(newArray)
