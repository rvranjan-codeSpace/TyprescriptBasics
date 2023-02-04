const userName : number|string = "kim";
console.log(userName)

type student = {
    name:string
    id: number
}

type intern ={
    discipline : string
}

let studentIntern: student | intern = {name:"kim",id:34}
studentIntern = {name:"kim",id:34, discipline:"cs"} 