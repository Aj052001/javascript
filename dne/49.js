// lexical scope 

const value1 = "myvlaue1"

const myFun = ()=>{

    const value2 = "value2"
    const fun2 = ()=>{
        var value3 = '3'
        console.log(value1)
        console.log(value2)
    }
    fun2()
    
    console.log(value1)
}

myFun()