import { Customer, Employees } from "./GenericImpl"; 
import { Person } from "./Person";
import { CalculatorService } from "./CalcualtorService";


let customerInfo :Person= new Customer("Kim:Customer",897);
console.log(customerInfo.getPersonDetails())

let employeeInfo:Person = new Employees("Jack:EMployee",982);
console.log(employeeInfo.getPersonDetails())

function getPersonType<T extends Person>(Person:T):T{
    return Person;
}


console.log("\nGetting Personal")
let foo:Person = getPersonType(customerInfo);
console.log(foo.getPersonDetails())

console.log("\n Generic types in Class")
let calc = new CalculatorService<"some Value">()

console.log("Add:"+calc.add(1,2))

console.log("Sub:"+calc.sub(4,14))

console.log("Add:"+calc.getServiceName("calculator Service"))



