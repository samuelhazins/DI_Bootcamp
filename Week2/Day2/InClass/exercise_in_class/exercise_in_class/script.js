const userCart = {
	username: "John",
	password: 1234,
	isUserSignedIn: true,
	cart: {
		apple: 2,
		banana: 1,
		pear: 5,
	},
	prices: {
		apple: 0.5,
		banana: 0.8646466363,
		pear: 0.2
	}
};

// 1. Add the lastname Smith to the object
userCart["lastname"] = "Smith";
userCart.lastname = "Smith";

// 2. Change the price of the pear, so it will contain the Taxes. 17%

// here, the price of the fruit is hardcoder - NOT GOOD
// userCart["prices"]["pear"] = 0.2 * 1.17;

userCart["prices"]["pear"] = userCart["prices"]["pear"] * 1.17;

//shortcut
userCart["prices"]["pear"] *= 1.17;


// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. 
// Make sure that your code accept all type of strings, 
// for example "Banana" or "banana" or "BaNaNA"

// let answer = prompt("what fruit do you want ?")
// answer = answer.toLowerCase();

const answer = prompt("what fruit do you want ?").toLowerCase()
console.log(answer);
console.log("answer");

// 4. Console.log the price for the specific fruit the user wants

//Retrieve the price of the apple
// console.log(userCart["prices"]["apple"]); // 0.3

//Retrieve the price of the banana
// console.log(userCart["prices"]["banana"]); //0.8646466363

//Retrieve the price of the pear
// console.log(userCart["prices"]["pear"]);

// ze knoz that the variable answer is equal to the fruit the user wants
console.log(userCart["prices"][answer]);
// console.log(userCart.prices.answer); //undefined - dot notation NOT GOOD

console.log(`The price of the ${answer} is ${userCart["prices"][answer].toFixed(2)}`);



// SHORTCUT AND MATHS
let num = 4;
// num is the variable = value of the variable + 2
// num = 4 + 2
num = num + 2; // num = 6
num += 2; //shortcut num = 6

num = num * 4;
num *= 4 // num * 4

let age = 20;
age = age + 1;
age += 1;
age ++;
