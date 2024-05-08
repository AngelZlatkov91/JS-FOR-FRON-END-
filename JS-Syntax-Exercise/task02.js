function solve(count,type,day) {
    let singlePrice = 0;


    if (day === 'Friday') {
        switch(type) {
            case 'Students':
              singlePrice = 8.45;
                break;
            case 'Business':
                singlePrice = 10.90;
                break;
            case 'Regular':
                singlePrice = 15;
                 break;
        }

    } else if (day === 'Saturday') {
        switch(type) {
            case 'Students':
                singlePrice = 9.8;
                break;
            case 'Business':
                singlePrice = 15.6;
                break;
            case 'Regular':
                singlePrice = 20;
                 break;
        }

    } else if (day === 'Sunday') {
        switch(type) {
            case 'Students':
                singlePrice = 10.46;
                break;
            case 'Business':
                singlePrice = 16;
                break;
            case 'Regular':
                singlePrice = 22.50;
                 break;
        }
    }
    let totalPRice = singlePrice * count;

    if (type === 'Students' && count >= 30) {
        totalPRice = totalPRice * 0.85;
    } else if (type === 'Bisness' && count >= 100) {
        totalPRice = totalPRice - singlePrice * 10;
    } else if (type === 'Regular' && count >=10 && count <= 20) {
        totalPRice = totalPRice * 0.95;
    }
    console.log(`Total price: ${totalPRice.toFixed(2)}`)
    
    

}

solve(30,
    "Students",
    "Sunday" );