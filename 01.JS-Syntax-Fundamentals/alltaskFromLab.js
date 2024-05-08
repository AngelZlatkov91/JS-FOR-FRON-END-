function task1(num){
  console.log(num * 2);
}
task1(2);


function task2(name,age,grade) {
   console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

task2('John', 15, 5.54678);


function task3(number) {
    if (number >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }

}
task3(5.50);


function task4(number) {
    let month ='';
   switch (number) {
    case 1:
        month ='Januari';
        break;
        case 2:
        month ='Februari';
        break;
        case 3:
        month ='Mart';
        break;
        case 4:
        month ='April';
        break;
        case 5:
        month ='May';
        break;
        case 6:
        month ='June';
        break;
        case 7:
        month ='Jule';
        break;
        case 8:
        month ='August';
        break;
        case 9:
        month ='September';
        break;
        case 10:
        month ='Oktomber';
        break;
        case 11:
        month ='November';
        break;
        case 12:
        month ='December';
        break;
        default:
            month= 'Errpr!';
            break;
   }

   console.log(month);
}

task4(2);


