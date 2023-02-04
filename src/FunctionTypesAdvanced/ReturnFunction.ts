
function func1(){
    return function func2(name:string){
        return "hi "+ name;
    }
}

console.log("calling 2 functions at the same time::"+func1()("Rajan"))

//adding parameters to both funtions
function func3(name:string){
    let greet :string = "hi"
    return function func2(id:number){
        return greet+" "+ name + " id is:" +id;
    }
}

console.log("calling 2 functions both having parmeters:"+func3("Rajan")(341))

//using arrow funciton
// below is not v clear.

let greetCustomer : (firstName:string)=>String = function(lastName:string) {
   return  "Hi:"+ " "+lastName 
}
console.log(greetCustomer("Rajan"))


export class Student{

    name: string;
    id: number;

     sayHi():string{
        return "Hi"
    }

    sayHiAndHello(fn:Function):string{
        return "sayHiAndHello";
    }
    
    rollNum:(val1: number)=>String = (val2:number)=>{
      return "Hola" + "Number passed was :"+ val2 + "and:" + val1;
    }
}

var studentObj:Student = new Student()
const val1 = studentObj.sayHi();
console.log("Hi:"+val1)

const func  = studentObj.sayHi;
const val2 = studentObj.sayHiAndHello(func);
console.log("Hi and Hello"+val2)

console.log(studentObj.rollNum(2))

