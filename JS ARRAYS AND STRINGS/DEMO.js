//declere an array
let number = [1,2,3,4,5,6];
let names =['pesho', 'angel','ivan'];
//declere empty array // truty velue
let empty = []; 

// dynamic array add element
empty[0]=1;
empty[1]=2;
console.log(empty);

//accessing by index
let firstname = names[0];


//accsessing invalid index
console.log(names[4]);


// array destructoring assignment

let [firstNumber,secondNumber,thurdNumber, ...restNumbers] = [1,2,3,5,6,8,9];


//for of loop
for (let name of names) {

}