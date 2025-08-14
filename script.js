const pets = ['cat', 'dog', 'rabbit', 'hamster', 'goldfish', 'pigeon'];

pets.push('guinea pig'); // add to end of list

console.log(pets); // "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon", "guinea pig"

console.log(pets.pop()); //removes and returns last element, guinea pig

console.log(pets); //returns "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon" 

console.log(pets.shift()); //removes and returns first element, cat

console.log(pets); //returns "dog", "rabbit", "hamster", "goldfish", "pigeon"

pets.unshift('cat'); //add to start of list

console.log(pets); //returns "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon"