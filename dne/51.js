// default parameters 


// Default parameters let you set fallback values for function parameters when no value or undefined is passed. It's like having a backup plan if someone forgets to give you information.


// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

// function addTwo(a,b=0){
//     return a+b;
// }

// const ans = addTwo(4, 8);
// console.log(ans);





const addTwo = (a,b=4)=>{
    
    console.log(a+b)
}

addTwo(4)