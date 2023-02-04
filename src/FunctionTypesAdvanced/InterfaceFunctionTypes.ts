//In addition to describing an object with properties, interfaces are also capable of describing function types.

interface FunctionTypeDemo{
    // no need to mention function Name
    (name:String, id: number):String;
    (isStudent:string, id: number):String;
}


let greet:FunctionTypeDemo = (s:String,y:number)=>{
    return "Hi " +s + "with id:"+y 
}

console.log(greet("Rajan",341))