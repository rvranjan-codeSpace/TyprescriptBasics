
import { Calculator } from "./Person";

export class CalculatorService <Z> implements Calculator<number, number, string>{

    add = (a: number, b: number): number => {
        return a + b;
    }
    sub = (a: number, b: number): number => {
        return b-a;
    }
    getServiceName= (s: string) => {
        return s;
    };
}