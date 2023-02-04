interface book{
    [name:string]:number
}

let mybook:book=
{
    "harryPotter":1,
    "loveBysea":2

}

console.log("This is like key in an array:"+mybook["harryPotter"])

//Second example

interface Options{
    [Error:string]:string | number| boolean;
    unknown:string
    
}

let options:Options ={
    unknown:"unknown",
    "timeout":"Error via timed out",
    "isFileUpload":false,
    "totalTimetaken":1000, 
}

console.log(options["unknown"])

//another good example

const salaryType1 ={
    "base": 10000,
    "bonus" :5000
}

const salaryType2={
    "base": 8000
}

interface Salary{
    [key:string]:number
}

function caclculateSal(salaryObj:Salary):number{
    let totalSalay:number = 0;
    for(const name in salaryObj){
        totalSalay+=salaryObj[name]
    }
    return totalSalay
}

console.log("Total Salary type1:"+ caclculateSal(salaryType1))
console.log("Total Salary type1:"+ caclculateSal(salaryType2))

