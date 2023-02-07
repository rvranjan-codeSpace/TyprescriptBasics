function greetings(greetTyep:String, ...names:string[]):string{
    return greetTyep +" "+names.join(",");
}

console.log(greetings("Hi","john","rajan"))


//object separators


const person= {
    name:"rajan",
    age: "32",
    job: "enginner"
}

//replace the person's age and copy into a new object.

const copiedPerson ={...person, age:"22"}
console.log("Original Person:"+ JSON.stringify(person))
console.log("Duplicate Person:"+JSON.stringify(copiedPerson))