// section 2, lecture 13
// arrow functions

const name = 'Chris'; // variable identifer cannot be reassigned
let age = 31;
const hasHobbies = true;

age = 32;

console.log(name);

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return (
        'Name is ' + userName + 
        ' age is ' + userAge +
        ' and the user had hobbies: ' + userHasHobbies
    )
}

console.log(summarizeUser(name, age, hasHobbies));

const add = (a, b) => a + b;
console.log(add(1, 2));

const addOne = a => a + 1;
console.log(addOne(1));

const addRandom = () => 2 + 3;
console.log(addRandom());


