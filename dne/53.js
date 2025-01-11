// param destructuring 


// Parameter destructuring is like unpacking a box directly when it arrives. Instead of getting the whole box and then opening it, you can say exactly which items you want right away.


// 
// object 
// react 

// const person = {
//     firstName: "harshit",
//     gender: "male",
//     age: 500
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);



const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}





const printPerson = ({firstName,gender,age})=>{
    console.log(user.firstName)
    console.log(user.age)
}

printPerson(person)

