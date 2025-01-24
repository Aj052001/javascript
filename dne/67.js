// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();


// const data = new Set([1,2,3,4,4]);

// data.has(4)

// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);

// splice method 
// start , delete , insert 

// const myArray = ['item1', 'item2', 'item3'];

// const deletedItem = myArray.splice(1, 2,"item4","item5");

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



// Practical Questions from Set:
// Question:
// Create a Set with the numbers 1, 2, 3, 4, 5. Add the number 6 to the Set. Check if the number 3 is present in the Set and print the result.

// Question:
// Given the array [1, 2, 2, 3, 4, 4, 5], create a Set to remove duplicates and print the unique values.

// Question:
// Create a Set with the strings 'apple', 'banana', and 'cherry'. Use a loop to print all the elements in the Set.

// Practical Questions from splice:
// Question:
// Given the array ['item1', 'item2', 'item3', 'item4'], use splice to remove 'item2' and 'item3' and replace them with 'newItem1' and 'newItem2'. Print the updated array.

// Question:
// Start with the array ['item1', 'item2', 'item3']. Use splice to insert 'newItem' at index 1 without removing any existing elements. Print the final array.
// const data = new Set([1,2,3,4])


// data.add(5);

// data.add(6)

// const array = [1,2,10]
// const array2 = array.slice(0)
// const arra3 = [1,2,10]

// data.add(array)
// data.add(array2)

// console.log(data.has(array))
// // console.log(data)


// console.log(data)


// // console.log(data.length)

// length = 0;

// for(let item of data)
// {
//     length++
// }
// console.log(length)



// Practical Questions from Set:


// Question:
// Create a Set with the numbers 1, 2, 3, 4, 5. Add the number 6 to the Set. Check if the number 3 is present in the Set and print the result


// const numbers = new Set([1,2,3,4,5]);

// numbers.add(6)
// numbers.has(3)
// console.log(numbers)




// Question:
// Given the array [1, 2, 2, 3, 4, 4, 5], create a Set to remove duplicates and print the unique values.

// const array = new Set ([1, 2, 2, 3, 4, 4, 5]);

// console.log(array)





// Question:
// Create a Set with the strings 'apple', 'banana', and 'cherry'. Use a loop to print all the elements in the Set.


// const array = new Set(['apple','banana','charry'])
// console.log(array)





// Practical Questions from splice:


// Question:
// Given the array ['item1', 'item2', 'item3', 'item4'], use splice to remove 'item2' and 'item3' and replace them with 'newItem1' and 'newItem2'. Print the updated array.


// const items = ['item1', 'item2', 'item3', 'item4']

// const addItems = items.splice(1,2,"newItem1","newItem2");

// console.log(addItems)
// console.log(items)



// Question:
// Start with the array ['item1', 'item2', 'item3']. Use splice to insert 'newItem' at index 1 without removing any existing elements. Print the final array.


// const array = ['item1', 'item2', 'item3']

// array.splice(1,0,"newItem")

// console.log(array)

// console.log("hello world ")