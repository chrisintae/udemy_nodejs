// section 2, lecture 16
// arrays, objects + reference types

const person = {
    name: 'Chris',
    age: 31,
    greet() {
        console.log('Hi, I\'m ' + this.name);
    }
}

// array
const hobbies = ['sports', 'cooking']

// add element to end of array
hobbies.push('Programming');
console.log(hobbies);