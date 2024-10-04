function getCelsius(Fahrenheit){
    return (Fahrenheit - 32) * 5/9;
}

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C

const minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min,max];
}

console.log(minMax([1,2,3,4,5]));

//IIFE is a function that is executed right after it is created
(function (L,W){
    console.log(`The area of a rectangle with a length of ${L} and a width of ${W} is ${L*W}.`);
})(5,10);

