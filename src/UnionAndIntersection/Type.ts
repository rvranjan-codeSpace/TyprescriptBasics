interface interfaceData{
    name:string;
    id:number;
    Hello(interfaceData):string
}

type typeData ={
    name:string;
    id:number;
}


var iterfaceResp :Partial<interfaceData> = {name:"kim", id:23}
console.log(iterfaceResp.id +" " + iterfaceResp.name)

var typeResp: typeData = {name:"rajan", id:42}
console.log(typeResp.id +" " + typeResp.name)

