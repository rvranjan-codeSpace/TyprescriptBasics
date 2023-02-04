
type HasName = {
    name:string
}

type HasAge = {
    age:number
}

const a : HasAge & HasName = {name:"Kim", age:23}

console.log(a)

type HasNumber = HasAge & HasName &{
    phNum:number
}
const b :HasNumber= {name:"lolly", age:21, phNum:3456}
