"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentObj = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
exports.studentObj = {
    name: "Rajan",
    address: {
        city: "delhi",
        contry: "india",
        getCompleteAdd: () => " delhi, India"
    }
};
