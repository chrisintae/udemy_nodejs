// section 2, lecture 16
// understanding spread + rest operators

const person = {
    name: 'Chris',
    age: 31,
    greet() {
        console.log('Hi, I\'m ' + this.name);
    }
}

// spread operator, object
const copiedPerson = {...person};
console.log(copiedPerson);



// array
const hobbies = ['sports', 'cooking']

// spread operator, array
const copiedNestedArray = [hobbies];
console.log(copiedNestedArray);

const copiedArray = [...hobbies]; // spread operator
console.log(copiedArray);


// rest operator
const toArray = (...args) => {
    return args
}
console.log(toArray(1, 2, 3, 4));
