function solve(text) {
const mathces = text.matchAll(/[A-Z][a-z]*/g);

const words = Array.from(mathces).map(match => match[0]);


  console.log(words.join(', '))



}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');