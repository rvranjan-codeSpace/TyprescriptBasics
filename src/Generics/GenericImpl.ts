import {Person} from './Person'

console.log("Generic implementation")

export class Employees implements Person
{
    name: string
    phNumber: number

    constructor(name:string, phNumber:number){
        this.name = name;
        this.phNumber = phNumber;
    }
    getPersonDetails=()=>{return "Employees :"+ this.name + "" + this.phNumber}    
}

export class Customer implements Person {
    name: string;
    phNumber: number;
    gender: string;

    constructor(name:string, phNumber:number){
        this.name = name;
        this.phNumber = phNumber;
    }
    getPersonDetails=()=>{return "Employees :"+ this.name + "" + this.phNumber}    
}