// met return statement
let tellFortune = function (jobTitle, geoLocation, partner, numChild) {
    return "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with " + numChild + " kids.";
}
console.log(tellFortune("artist", "Ede", "Gerdo", 2));
console.log(tellFortune("writer", "New York", "Johnny Depp", 1));
console.log(tellFortune("actor", "LA", "nobody", 0));

// zonder return
const tellFortune2 = function (jobTitle, geoLocation, partner, numChild) {
    let future = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with " + numChild + " kids.";
    console.log(future);
}
tellFortune2("artist", "Ede", "Gerdo", 2);
tellFortune2("writer", "New York", "Johnny Depp", 1);
tellFortune2("actor", "LA", "nobody", 0);