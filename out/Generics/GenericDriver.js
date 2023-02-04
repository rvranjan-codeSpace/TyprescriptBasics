"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericImpl_1 = require("./GenericImpl");
const CalcualtorService_1 = require("./CalcualtorService");
let customerInfo = new GenericImpl_1.Customer("Kim:Customer", 897);
console.log(customerInfo.getPersonDetails());
let employeeInfo = new GenericImpl_1.Employees("Jack:EMployee", 982);
console.log(employeeInfo.getPersonDetails());
function getPersonType(Person) {
    return Person;
}
console.log("\nGetting Personal");
let foo = getPersonType(customerInfo);
console.log(foo.getPersonDetails());
console.log("\n Generic types in Class");
let calc = new CalcualtorService_1.CalculatorService();
console.log("Add:" + calc.add(1, 2));
console.log("Sub:" + calc.sub(4, 14));
console.log("Add:" + calc.getServiceName("calculator Service"));
