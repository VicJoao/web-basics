let x;
// Create an array
const myArray = [1, 2, 3, 4, 5];

const nArray = new Array(1, 2, 3, 4, 5);

// Create an object
const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};
x = myArray[0];
x = myObject.name;
x = myObject['name'];
x = myArray.length;
x = myObject.length;
x = Array.isArray(myArray);
x = Array.isArray(myObject);
x = myArray.indexOf(3);
x = myArray.indexOf(6);
x = myArray.push(6);
x = myArray;
x = myArray.unshift(0);
x = myArray.pop();
myArray.shift();
//myArray.splice(2, 1); // Remove 1 element from index 2
//myArray.reverse();
//x = myArray.concat(nArray);
//x = myArray.sort();
//x = myArray.slice(0, 4);

console.log(x);
console.log(myArray);
console.log(myObject);

//Nested Concat and Slice methods
const myArray2 = [1, 2, 3, 4, 5];
const myArray3 = [6, 7, 8, 9, 10];
const myArray4 = [11, 12, 13, 14, 15];
let y;

y = myArray2.concat(myArray3, myArray4);
y = y.slice(0, 4);

const AllArrays = [myArray2, myArray3, myArray4];

y = myArray2.concat(myArray3.slice(0, 2), myArray4.slice(0, 2));
//Spread operator
y = [...myArray2, ...myArray3, ...myArray4];//same as concat

y = AllArrays.flat();

console.log(y);
console.log(AllArrays);