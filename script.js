class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for the species property
    get species() {
        return this._species;
    }

    // Method to log a sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Define the Cat class that extends the Animal class
class Cat extends Animal {
    // Method to log the sound "purr"
    purr() {
        console.log("purr");
    }
}

// Define the Dog class that extends the Animal class
class Dog extends Animal {
    // Method to log the sound "woof"
    bark() {
        console.log("woof");
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); 

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
