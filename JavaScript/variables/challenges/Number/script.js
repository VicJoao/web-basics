const x = Math.random()* 100 + 1;
const y = Math.random()*50 + 1;

let sum;
let dif;
let prod;
let quo;
let rem;

sum = x + y;
dif = x - y;
prod = x * y;
quo = x / y;
rem = x % y;

const results = `The sum of ${x} and ${y} is ${sum}. The difference between ${x} and ${y} is ${dif}. The product of ${x} and ${y} is ${prod}. The quotient of ${x} and ${y} is ${quo}. The remainder of ${x} and ${y} is ${rem}.`;
console.log(results);
