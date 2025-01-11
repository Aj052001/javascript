// function returning function 

// A function that returns another function is like a factory that makes specialized tools.

// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans());


// hire order function and lower order function


// const addTwo = ()=>{
//     const newFun = (a,d)=>{
//            return a+d;
//     }
//     return newFun;
// }

// let ans = addTwo()
// console.log(ans)

// console.log(ans(4,5))
// console.log(typeof ans)