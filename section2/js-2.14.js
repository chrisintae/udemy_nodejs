// section 2, lecture 14
// working with objects, properties, + methods

const person = { // object
    name: 'Chris',
    age: 31,
    greet() {
        console.log('Hi, I\'m ' + this.name);
    }
}

person.greet();


// this has global scope
/*

const person = {
    name: 'Chris',
    age: 31,
    greet: () => {
        console.log('Hi, I'm ' + this.name) // this has global scope
    }
}
*/

// works
/*

const person = {
    name: 'Chris',
    age: 31,
    greet: function() {
        console.log('Hi, I'm ' + this.name) // this has global scope
    }
}
*/