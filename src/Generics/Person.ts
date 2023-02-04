export interface Person{
    name:string;
    phNumber:number;
    getPersonDetails():string
}

export interface Calculator<T,U,S>{

    add:(T,U)=>number;
    sub:(T,U)=>number
    getServiceName:(S)=>S;
}




