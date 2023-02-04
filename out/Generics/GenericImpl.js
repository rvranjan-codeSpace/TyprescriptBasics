"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = exports.Employees = void 0;
console.log("Generic implementation");
class Employees {
    constructor(name, phNumber) {
        this.getPersonDetails = () => { return "Employees :" + this.name + "" + this.phNumber; };
        this.name = name;
        this.phNumber = phNumber;
    }
}
exports.Employees = Employees;
class Customer {
    constructor(name, phNumber) {
        this.getPersonDetails = () => { return "Employees :" + this.name + "" + this.phNumber; };
        this.name = name;
        this.phNumber = phNumber;
    }
}
exports.Customer = Customer;
