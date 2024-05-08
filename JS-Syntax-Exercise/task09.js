function solve(fruet,weight,pricePerKg) {
    const weightInKg = weight / 1000;
    let money = weightInKg * pricePerKg;
    console.log(`I need \$${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruet}.`);
}

solve('orange',2500,1.80);