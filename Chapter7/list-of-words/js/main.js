// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
const words = [];
let running = true;
while(running) {
    input = prompt('Give me a word');
    if (input != 'stop'){
        words.unshift(input)
    }else {
        running = false;
    }
}
console.log(words.forEach(x => console.log(x)));