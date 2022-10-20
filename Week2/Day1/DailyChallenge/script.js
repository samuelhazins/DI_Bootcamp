// --- Exercises XP ---

// --- Exercise 1 ---
// Store your favorite food into a variable
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>

const favoriteFood ="omelet";
const favoriteMeal ="breakfast";
console.log("I eat", favoriteFood, "at every", favoriteMeal);
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)

// // ---Exercise 2---
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length
const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`
const sentence =`I have watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
console.log(sentence)

// // Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries[2] = "friends"
myWatchedSeries.push("Daredevil")
myWatchedSeries.unshift("Travelers")
delete myWatchedSeries[1]
const moneyheist = myWatchedSeries[2]
console.log(moneyheist[2])
console.log(myWatchedSeries)

// ---Exercise 3---
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsiusTemperature = 22;
const fahrenheitTemperature = celsiusTemperature / 5 * 9 + 32;
console.log(fahrenheitTemperature);

// ---Exercise 4---
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5'); //75 Because 5 is a string and not a number because of the ''


// ---Exercise 5---
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// What is the output of each of the expressions below?
typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: word
// Actual: number

typeof("hello")
// Prediction:string
// Actual: string

typeof(true)
// Prediction: command
// Actual: boolean

typeof(1 != 2)
// Prediction: ?
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: Nan (not a number)

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:1-3
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual: johnny5

"johnny" - 5
// Prediction:johnny-5
// Actual:Nan

99 * "hello"
// Prediction: Nan
// Actual:NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: false
// Actual: false

// ---Exercise 6 ----
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// What is the output of each of the expressions below?
5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction:javascript
// Actual:javascript

" " + " "
// Prediction:"" 
// Actual:'  '

" " + 0
// Prediction:"0"
// Actual:' 0'

true + true
// Prediction: 2
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:!true
// Actual:!false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:Nan
// Actual:Nan

1 === "1"
// Prediction: true
// Actual: true