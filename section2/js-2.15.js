// section 2, lecture 15
// array + array methods

const person = {
    name: 'Chris',
    age: 31,
    greet() {
        console.log('Hi, I\'m ' + this.name);
    }
}

// array
const hobbies = ['sports', 'cooking']
 
for (let hobby of hobbies) {
    console.log(hobby);   
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);