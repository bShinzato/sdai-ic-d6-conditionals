// all code for this lab to be completed in this file

const currentTemperature = 40;

const myAge = 30;
const yourAge = 36;

const isLoggedIn = true;
const user = "Brandon"


if (currentTemperature > 32) {
    console.log("It's not freezing.");
} else {
    console.log("It is freezing!");
}

if (myAge === yourAge) {
    console.log("We are the same Age");
} else if (myAge > yourAge) {
    console.log("I am older than you.");
} else {
    console.log("Your are older than me!");
}

if (isLoggedIn != true) {
    console.log("Please Login");
} else {
    console.log(`Welcome Back ${user}`)
}
