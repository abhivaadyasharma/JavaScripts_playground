// Author: Abhivaadya Sharma

const ps = require("prompt-sync");
const prompt = ps();

// Input
let word = prompt("Enter word: ").toLowerCase();

// Vowels set
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

// Letters set (only alphabets)
const letters = new Set();

for (let ch of word) {
    if ((ch >= 'a' && ch <= 'z')) {
        letters.add(ch);
    }
}

// Check
let allPresent = true;
for (let v of vowels) {
    if (!letters.has(v)) {
        allPresent = false;
        break;
    }
}

if (allPresent) {
    console.log(`All vowels are present in ${word}`);
} else {
    console.log(`All vowels are not present in ${word}`);
}
