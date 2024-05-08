function solve(number) {
    let sum =0;
    while(number) {
       sum += number % 10;
        number = Math.trunc(number / 10);
    }
    console.log(sum)
}

solve(245678);



function solveWithString(number) {
    let texNumber = number.toString();
    let sum = 0;
    for(let i = 0; i < texNumber.length; i++) {
      sum += Number(texNumber[i]);
    }
    console.log(sum);
}

solveWithString(2345678);