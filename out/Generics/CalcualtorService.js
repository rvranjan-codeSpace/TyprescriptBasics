"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
class CalculatorService {
    constructor() {
        this.add = (a, b) => {
            return a + b;
        };
        this.sub = (a, b) => {
            return b - a;
        };
        this.getServiceName = (s) => {
            return s;
        };
    }
}
exports.CalculatorService = CalculatorService;
