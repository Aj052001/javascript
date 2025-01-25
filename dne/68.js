// // // Maps
// // // map is an iterable

// // // store data in ordered fashion

// // // store key value pair (like object)
// // // duplicate keys are not allowed like objects


// const data = new Map([['firstName','ajay'],['age',22]])

// // console.log(data.get('firstName'))

// data.set('lastname','singh')


// // console.log(data.keys())

// // for(let key of data.keys())
// // {
// //     // console.log(key)
// //     console.log(data.get(key))
// // }




// // data.set('lastname','singh')

// // const array = [1,2]

// // const [a,b] = array 


// // for (let [key,value] of data)
// // {
// //     console.log(key,value)
    
// // }


// // different between maps and objects

// // objects can only have string or symbol
// // as key 

// // in maps you can use anything as key
// // like array, number, string 

// // object literal 
// // key -> string 
// // key -> symbol
// // const person = {
// //     firstName : "harshit",
// //     age: 7,
// //     1:"one"
// // }
// // // console.log(person.firstName);
// // // console.log(person["firstName"]);
// // // console.log(person[1]);
// // for(let key in person){
// //     console.log(typeof key);
// // }

// // key value pair 
// // const person = new Map();
// // person.set('firstName', 'Harshit');
// // console.log(person.get('firstName'))
// // person.set('age', 7);
// // person.set(1,'one');
// // person.set([1,2,3],'onetwothree');
// // person.set({1: 'one'},'onetwothree');
// // console.log(person);
// // console.log(person.get(1));
// // for(let key of person.keys()){
// //     console.log(key, typeof key);
// // }
// // for(let [key, value] of person){
// //     // console.log(Array.isArray(key));
// //     console.log(key, value)
// // }

// const person1 = {
//     id: 1,
//     firstName: "harshit"
// }
// // const person2 = {
// //     id: 2,
// //     firstName: "harshta"
// // }


// const extraInfo = new Map();

// extraInfo.set(person1,{age: 8, gender: "male"})

// console.log(extraInfo)


// console.log(extraInfo.get(person1).gender)
// // extraInfo.set(person1, {age: 8, gender: "male"});
// // extraInfo.set(person2, {age: 9, gender: "female"});
// // // console.log(userInfo);
// // console.log(person1.id);
// // console.log(extraInfo.get(person1).gender);
// // console.log(extraInfo.get(person2).gender);



// // const obj = {
// //     firstName :"ajay",
// //     age : 22,
// //     1 :"one"
// // }

// // for( let value in obj)
// // {
// //     console.log(typeof(value))
// // }



// Q.1

// const student = new Map([['Naru',5],['Mohit',88]])
//    student.set('Alice',85)
//    student.set('Bob',90)

//    console.log(student)





// Q.2

//   const fruits = new Map([
//     ["apple", 10],
//     ["banana", 5],
//     ["orange", 8]
//   ]);

// for(let [key,value] of  fruits)

// {

    

//     let format = `Fruits : ${key} , Quantity : ${value}`
//     console.log(format)

// }


// Q.3


// const car1 = { model: "Tesla", year: 2020 };
// const car2 = { model: "Ford", year: 2018 };

// const carOwners = new Map([
//   [car1,{"ownerName": "John","age":"30"}],
//   [car2, "Doe"]
// ]);

// console.log(carOwners.get(car1).age)



// Q.4

// const products = new Map([
//     ["laptop", 1000],
//     ["phone", 500],
//     ["tablet", 700]
//   ]);


// // if (products.has("phone")) {
// //     console.log(`${products.get("phone")}`);
// //   } else {
// //     console.log("Product not found");
// //   }


// console.log(products.has("phoe"))


// const data = new Map([[1,"one"],["tow",2]])



// const obj = {
//     "firstName":"ajay"
// }

// const map = new Map([obj,{"age":22}])



const  products  = [
  {productId : 1 , productName:"speaker",price : 5000,brand:"boat"},
  {productId : 2 , productName:"bluetooth",price : 5000,brand:"jbl"},
  {productId : 3 , productName:"speaker",price : 5000,brand:"boat"},
  {productId : 4 , productName:"speaker",price : 5000,brand:"jbl"},
  {productId : 5 , productName:"speaker",price : 5000,brand:"jbl"},
]



// const data = products.filter((product)=>{
//       if(product.productName === "speaker"){
//         return product.productId
//       }
// })

// const ids = data.map((item)=>{
//     return item.productId
// })

// console.log(ids)

// [1,3,4,5 ] //filter,if 
// filter productName = speaker  uski id ka array return 


