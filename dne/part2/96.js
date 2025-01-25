// function execution context 

let fName = "ravi";
console.log(fName);
function getFullName(firstName, lastName,age){
    console.log(arguments[1]);  //
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("amit", "sharma",21);
console.log(personName);

//global scope 
//  fName = ravi
//   function  = funciton 

//personName = ajay sharma 


//fuction scope 
// myvar = var insdie fun
//full = ajay sharma




//ravi
// ["ajay","sharma"]
// var insdie fun