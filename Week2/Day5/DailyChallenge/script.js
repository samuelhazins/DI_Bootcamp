//  Prompt the user for a number to begin counting down bottles.
// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.
// 4. Note : Make sure you get the grammar correct.
// For 1 bottle, you pass “it” around.
// // For more than one bottle, you pass “them” around.

let answer = prompt ("Pick a number")

function song() {
    for (let i=1; i < answer; i++){
        let result = answer - i
        let it = "it"
        console.log(`${answer} bottles of beer on the wall ${answer} bottles of beer `);
        console.log(`take ${i} down toss around theres ${result} bottles of beer on the wall`);

        if (answer > result) {
            answer -= i
        }
    }
}
song ()

let end = "no bottle of beer on the wall"
console.log(end);