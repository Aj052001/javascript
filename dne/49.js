// lexical scope 
// A function in JavaScript is a reusable block of code that performs a specific task.
// const value1 = "myvlaue1"


// // Lexical scope means that any function can access variables defined in its outer environment, including its parent functions and the global scope. It's like a child who has access to their parent's belongings.

// const myFun = ()=>{

//     const value2 = "value2"
//     const fun2 = ()=>{
//         var value3 = '3'
//         console.log(value1)
//         console.log(value2)
//     }
//     fun2()
    
//     console.log(value1)
// }

// myFun()

value = "Hello outside world"


const sayHello = ()=>{
    // value = "Hello world"
    if(true)
    {
        // value = "good morning"
        console.log(`${value}`)
    }
}

sayHello();