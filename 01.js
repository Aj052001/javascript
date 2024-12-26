// // String indexing 

// 1. String Indexing
// Definition:
// String indexing is a way to access individual characters in a string using their position (index).

// The first character has an index of 0.
// The last character can be accessed using length - 1.


// 2. toUpperCase()
// Definition:
// The toUpperCase() method converts all the characters in a string to uppercase (capital letters). It does not modify the original string but returns a new string.

// 3. toLowerCase()
// Definition:
// The toLowerCase() method converts all the characters in a string to lowercase (small letters). Like toUpperCase(), it does not modify the original string but returns a new string.

// 4. trim()
// Definition:
// The trim() method removes any extra spaces from the beginning and end of a string. It does not remove spaces in the middle of the string.

// 5. slice()
// Definition:
// The slice() method extracts a part (substring) of a string based on the start and end indices and returns it as a new string. The original string remains unchanged.

// 6. split()
// Definition:
// The split() method splits a string into an array of smaller strings based on a specified delimiter (e.g., space, comma). It does not modify the original string.

// let firstName = "harshitdfjakldsfdf";

// //  h    a   r   s   h   i   t 
// //  0    1   2   3   4   5   6

// // console.log(firstName[0]);
// // length of string 
// // firstName.length 

// console.log(firstName.length);

// console.log(firstName[firstName.length-2]);

// last Index : length - 1 

// trim() 
// toUpperCase()
// toLowerCase()
// slice()

// let firstName = "harshit";

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

// let newString = firstName.slice(1); // hars
// console.log(newString);


// task

// 1. String Length
// Write a program that:

// Takes a string as input.
// Prints the length of the string.
// Prints the last character of the string using the length property.


// 2. First and Last Characters
// Write a program that:

// Accepts a string from the user.
// Prints the first character and the last character of the string.


// 3. Trim a String
// Write a program that:

// Accepts a string with extra spaces at the beginning and end.
// Removes the spaces using trim() and prints the trimmed string and its length before and after trimming.

// 4. Convert to Uppercase and Lowercase
// Write a program that:

// Takes a string as input.
// Converts it to uppercase and prints it.
// Converts the same string to lowercase and prints it.

// 5. Extract Substring
// Write a program that:

// Takes a string and two numbers as input (start index and end index).
// Extracts and prints the substring from the start index (inclusive) to the end index (exclusive) using the slice() method.



//     *
//    **
//   ***
//  ****
// *****

//     *
//    ***
//   *****
//  *******
// *********

// for(let i = 1;i<=5;i++)
// {
//     let str = "";
//     for(let j = 1;j<=10-i;j++)
//     {
//         str+=" ";
//     }
//     for(let j = 1;j<=i;j++)
//     {
//         str+=" *";
//     }
//     console.log(str)
// }


