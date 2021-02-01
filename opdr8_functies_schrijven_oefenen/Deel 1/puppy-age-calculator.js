// met return statement
const calculateDogAge = function (agePuppy) {
    return "Your doggie is " + agePuppy * 7 + " years old in dog years!";
};
console.log(calculateDogAge(10));
console.log(calculateDogAge(2));
console.log(calculateDogAge(5));

// zonder return
const calculateDogAge2 = function (agePuppy) {
    let dogAge = 7 * agePuppy;
    console.log("Your doggie is " + dogAge + " years old in dog years!");
};
calculateDogAge2(10);
calculateDogAge2(2);
calculateDogAge2(5);