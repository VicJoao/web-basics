//imports

let personObject = {
    id: 1,
    name : 'João',
    age : 25,
    isStudent : true,
};

const personJson = JSON.stringify(personObject);

console.log(personJson);

const personParse = JSON.parse(personJson);

console.log(personParse);