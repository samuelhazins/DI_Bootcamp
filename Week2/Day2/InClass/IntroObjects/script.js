// Array
// const shoes = ['Adidas', 'Nike'];
// shoes[0]

// Objects

// data type - way to store relevant information
// {
//     key:value,
//     key:value,
//     key:value,
// }

// example facebook
const user = {
    userFirstName:"John",
    userLastName:"Smith",
    isSignUp:true,
    age: 30,
    friendsFollow: ["Sara", "Lea"],
}

// shoe is a variable
// const, let it means that I declare a varaible
// whatever is inside the object is stored in the variable
const shoe = {
    nameShoe:"Adidas",
    colorShoe:["red", "blue","yellow"],
    price: 100,
};

// retrieve a value
// variable["name of property"]
console.log(shoe.price);
console.log(shoe["price"]);

// //The yellow adidas cost 100 dollars
const sentence = `The ${shoe.colorShoe[2]} ${shoe.nameShoe} cost ${shoe.price} dollars`
console.log(sentence);
// // recommend
const sentenceTwo = `The ${shoe["colorShoe"][2]} ${shoe["nameShoe"]} cost ${shoe["price"]} dollars`
console.log(sentenceTwo);

const family = {
	lastname: "Smith",
	members: 4,
	hasADog: true,
	nameOfMembers: ["Lea", "David", "Mom", "Dad"],
	friends: {
		name: "Jack",
		lastname: "ABC",
		age: 12,
		favoriteColors: ["blue", "red"],
	}
};

console.log(family["lastname"]); //"Smith"
console.log(family["nameOfMembers"]); //["Lea", "David", "Mom", "Dad"]
console.log(family["nameOfMembers"][1]); //"David"

//name of the friend of family
console.log(family["friends"]);
// {
//     name: "Jack",
//     lastname: "ABC",
//     age: 12,
//     favoriteColors: ["blue", "red"],
// }
console.log(family["friends"]["name"]); //"Jack"
// second favorite color of Jack
console.log(family["friends"]["favoriteColors"]); //["blue", "red"]
console.log(family["friends"]["favoriteColors"][1]); //red

const shoes = {
    nameShoe:"Adidas",
    colorShoe:["red", "blue","yellow"],
    price: 100,
};

shoes["price"] = 50; //modify the value of the property price
shoes["place"] = "Paris"; //add the property place