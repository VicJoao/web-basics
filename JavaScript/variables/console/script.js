console.log(10);

console.log("Hello World");

console.log(10 + 20);

console.log(20,"hello", true, 10.5);

var a = 9;

console.log(a);

if (a<10) {
console.error("a is less than 10");
a+=2;
}

if (a > 10) {
    console.warn("a is greater than 10");
}

console.table({a:10, b:20});

console.group("Group 1");
console.log("Hello");
console.log("World");
console.groupEnd();

const styles = "color: red; font-size: 20px; background-color: black;";
console.log("%cHello World", styles);
