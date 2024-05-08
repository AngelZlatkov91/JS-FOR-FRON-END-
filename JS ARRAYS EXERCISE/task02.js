function solve(arrayOfStrings, steps) {
    let result = [];
   for (let i = 0; i< arrayOfStrings.length; i+=steps) {
      result.push(arrayOfStrings[i]);
   }
   return result;
}

console.log(solve(['5','2','3','9'], 2));



function quickSolve(array, step) {
const result = array.filter((element, index) => index % step ===0);
return result;
}

console.log(quickSolve(['5','2','3','9'], 2));