"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
function func1() {
    return function func2(name) {
        return "hi " + name;
    };
}
console.log("calling 2 functions at the same time::" + func1()("Rajan"));
//adding parameters to both funtions
function func3(name) {
    let greet = "hi";
    return function func2(id) {
        return greet + " " + name + " id is:" + id;
    };
}
console.log("calling 2 functions both having parmeters:" + func3("Rajan")(341));
//using arrow funciton
// below is not v clear.
let greetCustomer = function (lastName) {
    return "Hi:" + " " + lastName;
};
console.log(greetCustomer("Rajan"));
class Student {
    constructor() {
        this.rollNum = (val2) => {
            return "Hola" + "Number passed was :" + val2 + "and:" + val1;
        };
    }
    sayHi() {
        return "Hi";
    }
    sayHiAndHello(fn) {
        return "sayHiAndHello";
    }
}
exports.Student = Student;
var studentObj = new Student();
const val1 = studentObj.sayHi();
console.log("Hi:" + val1);
const func = studentObj.sayHi;
const val2 = studentObj.sayHiAndHello(func);
console.log("Hi and Hello" + val2);
console.log(studentObj.rollNum(2));
