// met return statement
const calculateSupply = function calculateSupply(age, dayAmount) {
    return "You will need " + 365 * age * dayAmount + " to last you until the ripe old age of " + age;
}
console.log(calculateSupply(10, 2));
console.log(calculateSupply(80, 3));
console.log(calculateSupply(110, 1));

// zonder return
const calculateSupply2 = function calculateSupply(age, dayAmount) {
    let supply = 365 * age * dayAmount
    console.log("You will need " + supply + " to last you until the ripe old age of " + age);
}
calculateSupply2(10, 2);
calculateSupply2(80, 3);
calculateSupply2(110, 1);