//same keys and values
// function createInstructor (firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

//same keys and values ES2015
function createInstructor (firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//computed property names
// var favoriteNumber = 42;

// var instructor = {
//     firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//computed property names ES2015

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber] : "That is my favorite!"
}

// object methods 
// var instructor = {
//     firstName: "Colt",
//     sayHi: function () {
//         return "Hi!";
//     },
//     sayBye: function() {
//         return this.firstName + " says bye!"
//     }
// }

// object methods ES2015

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal function
// const d = createAnimal("dog", "bark","woof")
// d.bark() // returns: "woof"

// const s = createAnimal("sheep", "bleet", "baaaa")
// s.bleet() // returns: "baaaa"

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}