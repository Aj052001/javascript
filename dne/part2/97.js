// lexical environment, scope chain


const lastName = "Vashistha";

const printName = function(){
    const firstName = "ajay";
        console.log(firstName);
        console.log(lastName);
 
    
}
printName();

// const lastName = "Vashistha";

// const printName = function(){
//     const firstName = "ajay";
//     function myFunction(){
//         console.log(firstName);
//         console.log(lastName);
//     }
//     myFunction()
    
// }
// printName();