
let cars =['bmv','audi','ford','jeep'];
console.log(cars);
// mutirashti metodi
// remove da last element the 'pop' is mutiring method same with stack remove method
let lastCar = cars.pop();
console.log(cars);
//add last item
cars.push('mazda');
console.log(cars);
cars.push('mustang', 'mercedes');
console.log(cars);

//first in first aut - shift , unshif
// remove first item
let firstCar = cars.shift();
console.log(firstCar);
console.log(cars);

// add first index element
cars.unshift('BMw');
console.log(cars);


// splice change contents of arrays 
   // remove start from index
   cars.splice(2,1);
   console.log(cars);
   // add in array and remove 

   cars.splice(2,1,'ford');
   console.log(cars);


   // reverse arays;
   cars.reverse();
   console.log(cars);

   // join is non-mutation method
   let carString = cars.join(', ');
   console.log(carString);

   //slice (not splice)

   let middleCars = cars.slice(1,4);
   console.log(middleCars);

   // create shallow cope
   let copy = cars.slice();


   // includes check if element exists in array same(isExist)
   let isFord = cars.includes('ford');
   console.log(isFord);

   // find index of element 
   let fordIndex = cars.indexOf('ford');
   console.log(fordIndex);
   // if element is not in the index return -1


   // find specifi element 

   let autoCar = cars.find(car => car === 'audi');
   console.log(autoCar);

//ForEach
cars.forEach(car=> console.log(car)); // expresion

//map

let numbers = [1,2,3,4,5];
console.log(numbers)
let doubleNUmbers = numbers.map(num => num * 2);
console.log(doubleNUmbers);

// filter 
let oddNumbers = numbers.filter(num => num % 2 !==0);
console.log(oddNumbers);

// Reduce

let sum = numbers.reduce((sum,num) => sum + num,0);
console.log(sum);

