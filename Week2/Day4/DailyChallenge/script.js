// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

const promptInput = prompt("Enter comma separated words");
const words = promptInput.split(",");
let max = 0;
for (let i=0; i < words.length; i++) {
    if (words[i].length > max) {
        max = words[i].length;
    }
}
console.log("*".repeat(max + 4));
 for (word of words) {
    console.log(`* ${word + "  ".repeat(max - word.length)}*`);
 }
 console.log("*".repeat(max + 4));