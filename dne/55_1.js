// Let me explain JavaScript functions in a clear way:
// A function in JavaScript is a reusable block of code that performs a specific task.

// Here's the basic syntax:

// function sayHello(name) {
//     return "Hello, " + name;
// }

// There are several ways to create functions:
// 1.Function Declaration:
// function add(a, b) {
//     return a + b;
// }

// 2.Function Expression:

// const add = function(a, b) {
//     return a + b;
// }

// 3. Arrow Function (ES6+):

// const add = (a, b) => {
//     return a + b;
// }
// // Or shorter for single expressions:
// const add = (a, b) => a + b;


// Key things to know about functions:

// They can take parameters (inputs)
// They can return values using the return statement
// If no return statement is specified, they return undefined
// They can access variables in their outer scope (closure)

// function calculateTotal(price, taxRate = 0.1) {
//     const tax = price * taxRate;
//     const total = price + tax;
//     return total;
// }

// // Using the function
// const finalPrice = calculateTotal(100); // Returns 110



// const obj = {
//     name: "JavaScript",
//     greet: () => {
//         console.log(this.name); // undefined, `this` doesn't bind to `obj`
//     }
// };
// obj.greet();

// const obj = {
//     name: "JavaScript",
//     greet: function () {
//         console.log(this.name); // `this` refers to the `obj` object
//     }
// };

// obj.greet(); // Output: "JavaScript"

// const obj = {
//     name: "JavaScript",
//     greet() {
//         console.log(this.name); // `this` refers to the `obj` object
//     }
// };

// obj.greet(); // Output: "JavaScript"

//**********************lexical scope********************************** */

// Lexical scope means that any function can access variables defined in its outer environment, including its parent functions and the global scope. It's like a child who has access to their parent's belongings.
// Here's a real-world analogy:
// Imagine nested Russian dolls. The smallest doll (inner function) can "see" all the larger dolls that contain it (outer functions), but the larger dolls can't "see" inside the smaller ones.

// function parent() {
//     let name = "John";  // Parent's variable
    
//     function child() {
//         console.log(name);  // Child can use parent's 'name'
//     }
    
//     child();
// }

// let city = "New York";  // Global variable

// function outer() {
//     let weather = "sunny";  // Outer function's variable
    
//     function inner() {
//         // inner function can access both 'city' and 'weather'
//         console.log(`It's ${weather} in ${city}`);
//     }
    
//     inner();
// }

// The key thing to remember is: functions can look "outward" for variables, but outer code can't look "inward" into functions. Just like you can see what's outside your house through a window, but people outside can't see inside if the curtains are drawn.



/*************function scoper vs block scope******** */

