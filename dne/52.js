// rest parameters 

// Rest parameters are like a bag that collects all extra arguments into an array. It uses the ... syntax and must be the last parameter in a function.


// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(4,5,4,2,10);
// console.log(ans);


const addTwo = (...numbers)=>{
    
       let sum = 0;
       for(let number of numbers)
       {
        sum +=number;
       }

       console.log(sum)
   
}

addTwo(1,2,3,4,5,6,7,8,9,10,100,1000)