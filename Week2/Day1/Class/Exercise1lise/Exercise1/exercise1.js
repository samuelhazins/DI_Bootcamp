//camelcase
// favoriteFoodInIsrael

const addressNumber = 2;
const addressStreet = "Ben yehuda";
const country = "Israel";

const globalAdress = "I live in " + country + " in the adress " + addressNumber + " " + addressStreet;
const globalAdress2 = `I live in ${country} in the adress ${addressNumber} ${addressStreet}`;


console.log('the first global adress is ', globalAdress);
console.log('the second global adress is ', globalAdress2);



let pet = "cat";
// pet = "dog" //assigning a new value
// cannot redeclare
// let pet = "rabbit";