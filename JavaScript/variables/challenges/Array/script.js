const arr = [1,2,3,4,5];

arr.reverse();

arr.unshift(6);

arr.push(0);

//console.log(arr)

//Challenge 2

const arr1 = [1,2,3,4,5]
const arr2 =[5,6,7,8,9,10];
let x = new Array(...arr1,...arr2);

x.splice(x.indexOf(5),1)

console.log(x)
