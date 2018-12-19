// section 2, lecture 12
// let & const

var name = 'Chris';
var age = 31;
var hasHobbies = true;s

console.log(name);

function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        'Name is ' + userName + 
        ' age is ' + userAge +
        ' and the user had hobbies: ' + userHasHobbies
    )
}

console.log(summarizeUser(name, age, hasHobbies));
