function solve(text, word) {
let result = text
.split(' ')
.filter(element => element === word)
.length;
console.log(result);
    
}

solve('This is a word and it alse is a sentence', 'is');