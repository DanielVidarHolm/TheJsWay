// Modeling a dog
// Complete the following program to add the dog object definition.

// TODO: create the dog object here
const dog = {
    name: 'Tria',
    size: '1 meter',
    species: 'Border collie',
    bark() {
        return 'ImaDog Wooof';
    }
};
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);