
function solve(length,numbers) {
   let getFirstNumbers = numbers.slice(0,length)
   .reverse()
   .join(' ');
   console.log(getFirstNumbers);
}

solve(3,[10,20,30,40,50])