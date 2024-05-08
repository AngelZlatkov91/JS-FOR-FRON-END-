function solve (wordsInput, template) {
const words = wordsInput.split(', ');
let startIndex = -1;
let endIndex = -1;
for (let i = 0; i< template.length; i++) {
if (template[i] === '*') {
    if (startIndex < 0) {
        startIndex = i;
        endIndex = i+1;
    } else {
        endIndex = i+1;
    }
} else {
    if (startIndex >= 0) {
       let lengtj = endIndex - startIndex;
       let word = words.find(w => w.length === lengtj);
       template = template.replace('*'.repeat(lengtj),word);
        startIndex = -1;
        endIndex = -1;
    }
}


}

console.log(template);


}

solve('great, learning', 
    'softuni is ***** place for ******** new programming languages'
);