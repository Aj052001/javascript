// callback functions 


// A callback is a function that you pass to another function as an argument - which gets called ("called back") later.


// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }


// myFunc(myFunc2);




const myFun = (data)=>{
    console.log(data)
}



const myFunc2 =(a)=>{

    console.log("inside fun2")
    const data = [1,2,3]
    a(data);
    console.log("after my fun")
    
}

myFunc2(myFun)