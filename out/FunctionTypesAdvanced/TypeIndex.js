let mybook = {
    "harryPotter": 1,
    "loveBysea": 2
};
console.log("This is like key in an array:" + mybook["harryPotter"]);
let options = {
    unknown: "unknown",
    "timeout": "Error via timed out",
    "isFileUpload": false,
    "totalTimetaken": 1000,
};
console.log(options["unknown"]);
//another good example
const salaryType1 = {
    "base": 10000,
    "bonus": 5000
};
const salaryType2 = {
    "base": 8000
};
function caclculateSal(salaryObj) {
    let totalSalay = 0;
    for (const name in salaryObj) {
        totalSalay += salaryObj[name];
    }
    return totalSalay;
}
console.log("Total Salary type1:" + caclculateSal(salaryType1));
console.log("Total Salary type1:" + caclculateSal(salaryType2));
