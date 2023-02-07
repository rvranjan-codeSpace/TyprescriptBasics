function greetings(greetTyep, ...names) {
    return greetTyep + " " + names.join(",");
}
console.log(greetings("Hi", "john", "rajan"));
//object separators
const person = {
    name: "rajan",
    age: "32",
    job: "enginner"
};
//replace the person's age and copy into a new object.
const copiedPerson = Object.assign(Object.assign({}, person), { age: "22" });
console.log("Original Person:" + JSON.stringify(person));
console.log("Duplicate Person:" + JSON.stringify(copiedPerson));
