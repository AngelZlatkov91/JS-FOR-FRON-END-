let name = 'Pesho ';
let secondName = 'Petrov';

// concat
let concatString = name.concat(secondName);
console.log(concatString);

//indexOf if existing word

let text = 'I am JavaScript developer';

let indexOfJava = text.indexOf('Java');
console.log(indexOfJava);

//substring take  part from text

let theBestLanguage = text.substring(indexOfJava,15);
console.log(theBestLanguage); 

let word = text.split(' ');
console.log(word);

// includes if same text is have a text return boolean

// repeat

console.log('tro ' + '*'.repeat(10));

// check string start wit or end 'startWith' amd 'endWith';

// reverse string 
let reverseString = text
.split('')
.reverse()
.join('');

console.log(reverseString);


// RegExp literal


let pattern = /JavaScript/;

//RegExp function constructor
let pattern2 = new RegExp('JavaScript');

//textPattern 
console.log(pattern.test(text));

// match by pattern


// String regesMethods

console.log(text.match(pattern));

// how to count matches 
console.log((Array.from(text)).length);

// repleace

console.log(text.replace(/JavaScript/g,'Java'));


