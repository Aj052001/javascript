// how to clone array 

// how to concatenate two arrays

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];












// array1.push("item3");

// console.log(array1===array2);
// console.log(array1)
// console.log(array2

//how to clone array

//1

// let array1 = ["item1", "item2"];

// let array2 = ["item1", "item2"];
// array2.push("item3")
// array2.push("item4")

// console.log(array1)
// console.log(array2)


// // slice 
// let array1 = ["item1", "item2"];
// // let array2 = array1.slice(1).concat("item3","item4");




// // []
// // let array2 = [].concat(array1)




// // array2.push("item3")


// //spread operator
// let array2 = [...array1,"item3","it"]
// console.log(array1)
// console.log(array2)


let array1 = [1,2,3]
let array2 = ["item3","item4"]

let array3 = [...array1,...array2,"apple"]
// let array3 = [].concat(array1).concat(array2)
// let array3 = array1.slice(0).concat(array2.slice(0))


console.log(array3)