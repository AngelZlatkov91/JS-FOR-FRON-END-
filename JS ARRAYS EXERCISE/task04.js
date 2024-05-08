function solve(numbers){
const sortedNumbers = numbers.sort((a,b) => a-b);
const result = [];

while (sortedNumbers.length > 0) {
 let firstNumber = sortedNumbers.shift();
 let lastNumber = sortedNumbers.pop();

 result.push(firstNumber);

 if (lastNumber) {
    result.push(lastNumber);
 }


}
return result;
}

console.log(solve([1,2,5,8,9,4,10,25,79,100]));