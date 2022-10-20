// ---exercise 1---
const addressNumber = 5;
const addressStreet = "Ben yehuda";
const country = "Israel";

const globalAddress = "I live in " + country + " in the address " + addressNumber + " " + addressStreet;
// const globalAddress = `I live in ${country} in the address ${addressNumber} ${addressStreet}`;


console.log('the first global adress is ', globalAddress);
// console.log('the second global address is ', globalAdress);

// ---exercise 2---
const birthYear = 1997;
const futureYear = 2027;
console.log("I will be ", futureYear - birthYear, " in ", futureYear);


// ---exercise 3---
// Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
// Display dog
// Add to the array pets, the pet horse. Remove the pet rabbit
// Display the array length

const pets = ['cat','dog','fish','rabbit','cow'];
// console.log(pets);
// const deleted = pets.splice(3, 1, "horse");
// console.log(deleted);
console.log(pets);
console.log("The length is", pets.length);


// Daily Challenge ---exercise 1---
// Using this array :const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:["Kiwi", "Oranges", "Blueberries"]

const fruits = ['Banana', 'Apples', 'Oranges', 'Blueberries'];
console.log(fruits);
fruits.splice(0, 1);
fruits.sort();
console.log(fruits);
const deleted = fruits.splice(3, 0, "Kiwi");
console.log(fruits);
fruits.shift();
fruits.reverse();
console.log(fruits);

// ---exercise 2---
// Using this array :
// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits);
console.log(moreFruits[1][1][0]);