// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.assign({},obj)
obj.key3 = "vlaue4"


console.log(obj2)
console.log(obj)











// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// const obj2 = Object.assign(obj)
// obj2.kye2 = "ajay"
// console.log(obj)


// const obj2 = Object.assign({},obj)
// obj2.kye2 = "ajay"
// console.log(obj)

