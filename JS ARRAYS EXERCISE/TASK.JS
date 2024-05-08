


function solve(numbers, rotation) {
    
    for(let j = 1; j <= rotation; j++) {
        let rotatedNumbers = [];
    let firstNumber = numbers[0];
    for(let i = 1; i< numbers.length; i++) {
        rotatedNumbers[i - 1] = numbers[i];
    }
     rotatedNumbers[rotatedNumbers.length] = firstNumber;
     numbers = rotatedNumbers;
}
    
console.log(numbers.join(' '));

}

solve ([51,47,32,61,21], 2);


function quickSolve(numbers , rotation) {
    for (let i = 1; i <= rotation; i++) {
        numbers.push(numbers.shift());
    }
    console.log(numbers.join(' '));
}

quickSolve ([51,47,32,61,21], 2);