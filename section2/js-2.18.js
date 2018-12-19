// section 2, lecture 18
// destructuring

const person = {
    name: 'Chris',
    age: 31,
    greet() {
        console.log('Hi, I\'m ' + this.name);
    }
}

// works
const printName = (personData) => {
    console.log(personData.name);
}
printName(person);

// object destructuring
const printNameAgain = ({ name }) => {
    console.log(name); 
}
printNameAgain(person)

const { name, age } = person;
console.log(name, age);

const hobbies = ['sports', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

