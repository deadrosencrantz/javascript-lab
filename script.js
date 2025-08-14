/* 
PUSH, POP, SHIFT, UNSHIFT

const pets = ['cat', 'dog', 'rabbit', 'hamster', 'goldfish', 'pigeon'];

pets.push('guinea pig'); // add to end of list

console.log(pets); // "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon", "guinea pig"

console.log(pets.pop()); //removes and returns last element, guinea pig

console.log(pets); //returns "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon" 

console.log(pets.shift()); //removes and returns first element, cat

console.log(pets); //returns "dog", "rabbit", "hamster", "goldfish", "pigeon"

pets.unshift('cat'); //add to start of list

console.log(pets); //returns "cat", "dog", "rabbit", "hamster", "goldfish", "pigeon"

//note: shift and push also return the value they add, if you're into that sort of thing. 
*/



/*
SPLICE
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

console.log(dogs); 
//returns "beagle", "borzoi", "xoloitzcuintli", "old english sheepdog", "chihuahua", "dalmatian", "basset hound" 
*/



/*
SLICE
Infuriatingly similar name to the above. "Simpler" but in a mind-numbingly obtuse kind of way. Let's see.
Returns a new array of all items from index start to end, not including end
Calling without arguments just reproduces the array

const rabbits = ["holland lop", "flemish giant", "mini rex", "lionhead", "angora"];

let bunnyShortList = rabbits.slice(1, 4) //new array created including 1 (flemish giant) but excluding 4 (angora)

console.log(bunnyShortList); //returns "flemish giant", "mini rex", "lionhead"
*/



/*
CONCAT
This one basically takes an array and makes a new array adding new stuff.
const baseHamsters = ["european hamster", "syrian hamster"];

const hamsters = baseHamsters.concat(["roborovski dwarf hamster", "campbell's dwarf hamster", "chinese hamster"]);

console.log(hamsters); //returns "european hamster", "syrian hamster", "roborovski dwarf hamster", 
// //"campbell's dwarf hamster", "chinese hamster"
*/



/*
FOREACH
I hate this one. I mean, it's fine, but still. Just repeats the same function for everything in the array.
Syntax is .forEach(item, index, array), with the bracketed arguments being optional.
If the function has a result I believe it is discarded.
const horses = ["clydesdale", "arabian", "mustang", "marwari"]

horses.forEach(alert); //alerts "clydesdale", "arabian", "mustang", "marwari" in that order

horses.forEach((item, index, array) => {
    alert(`Here we are in the horses array, consising of the following: ${array}.  We find ${item} at index ${index}!`)
});
//alerts Here we are in the horses array, consising of the following: 
// clydesdale,arabian,mustang,marwari.  
// We find clydesdale at index 0!
//...and so on for each item.
*/



/*
INDEXOF, LASTINDEXOF, INCLUDES 
These don't seem complicated but you never know. 
indexof(item, from) returns index of the item, starting from a specific index if you want. strict. -1 if not found.
lastindexof: same as above but searches right to left
includes(item, from): searches to check if item is there and returns true or false.
:/
const zooAnimals = ["pygmy hippo", "lemur", "sun bear", "meerkat", "tiger", "sun bear"];

alert(zooAnimals.indexOf("tiger")); //alerts 4

alert(zooAnimals.indexOf("sun bear")); //alerts 2

alert(zooAnimals.indexOf("sun bear", 3)); //alerts 5

alert(zooAnimals.lastIndexOf("sun bear")); //alerts 5

alert(zooAnimals.includes("pygmy hippo")); //alerts true
*/

