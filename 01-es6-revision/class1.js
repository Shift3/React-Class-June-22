import { Animal, Dog} from './class.js';

const cat = new Animal('Cat', 4);

console.log('type of Animal:', cat.type);
console.log('Number of legs:', cat.legs);

cat.makeNoise('Mew');

console.log(Animal.returnTen());

console.log(cat.meatData);

const doggy = new Dog('Dog', 4);
console.log(doggy.type, doggy.legs);
doggy.makeNoise();