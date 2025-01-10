// functions inside function 
// function app(){
//     const myFunc = () =>{
//         console.log("hello from myFunc")
//     }
    
//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => num1* num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();





//addTwo number 

const addTwoNumber = (x,y)=>{

    function welcome()
    {
        console.log("welcome inside addtwonumber")
    }
    welcome()
    const checkNumber = (a)=>{
        return a*2;
    }
    x = checkNumber(x);
    y = checkNumber(y);
    console.log(x+y)
}
addTwoNumber(4,5)