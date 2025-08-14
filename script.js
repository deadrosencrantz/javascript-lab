/* PUSH, POP, SHIFT, UNSHIFT

const pets = ['cat', 'dog', 'rabbit', 'hamster', 'goldfish', 'pigeon'];

pets.push('guinea pig'); // add to end of list

console.log(pets); // "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon", "guinea pig"

console.log(pets.pop()); //removes and returns last element, guinea pig

console.log(pets); //returns "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon" 

console.log(pets.shift()); //removes and returns first element, cat

console.log(pets); //returns "dog", "rabbit", "hamster", "goldfish", "pigeon"

pets.unshift('cat'); //add to start of list

console.log(pets); //returns "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon"

//note: shift and push also return the value they add, if you're into that sort of thing. */


/*SPLICE
This stupid thing can do a lot. Let's focus on how it can add, remove and replace elements.
Negative indices are fine in this and other array methods.
Splice edits the original string and I believe it alerts the things it removes, or 
possibly other stuff if you're not removing anything. I don't know, try it yourself.

const dogs = ["labrador", "springer spaniel", "lhasa apso", "dalmatian", "basset hound"];

//ADD
dogs.splice(3, 0, "chihuahua"); //at index 3, delete nothing and add "chihuahua"

console.log(dogs); //returns "labrador", "springer spaniel", "lhasa apso", "chihuahua", "dalmatian", "basset hound". 
//nothing removed but chihuahua now at index 3.

//REMOVE
//allegedly good because using 'delete' leaves an ugly empty array index with undefined or whatever
dogs.splice(1, 1); //at index 1, delete 1 thing

console.log(dogs); //returns "labrador", "lhasa apso", "chihuahua", "dalmatian", "basset hound"

//REPLACE
dogs.splice(0, 2, "beagle", "borzoi", "xoloitzcuintli", "old english sheepdog") //at index 0, delete 2 things and add these

console.log(dogs) 
//returns "beagle", "borzoi", "xoloitzcuintli", "old english sheepdog", "chihuahua", "dalmatian", "basset hound" */