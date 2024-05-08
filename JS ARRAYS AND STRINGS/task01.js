function solve(numbers) {
   let firstNUmber = numbers.shift();
   let lastNumber = numbers.pop();
   console.log(firstNUmber + lastNumber);
}
solve([20,30,40])