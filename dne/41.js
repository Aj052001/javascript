// // object destructuring
// const band = {
//   bandName: "led zepplin",
//   famousSong: "stairway to heaven",
//    data :{firstName:"ajay"},
//   year: 1968,
//   anotherFamousSong: "kashmir",
// };

// let { bandName, famousSong,data:{firstName}, ...restProps } = band;
// console.log(firstName)
// console.log(bandName);
// console.log(restProps);





const obj = {
  firstName :"ajay",
  lastName :"singh",
  data:{
    age :21,
  gender : "Male"
  }
  
}


const {firstName,lastName,data:{age,gender}} = obj

console.log(firstName)
console.log(lastName)
console.log(gender)

// note : if you want to change variable name so 
// example 
// const {firstName : myfirstName} = obj
