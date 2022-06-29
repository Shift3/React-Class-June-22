// Destructring an object
const personalInformation = {
  firstName: 'Greg',
  lastName: 'Huber',
  city: 'Perrysburg',
  state: 'OH',
  zipCode: 44355,
  male: true
};

const { firstName: fn, lastName: ln, city, male } = personalInformation;

console.log(`${fn} ${ln} ${city} ${male}`);

// Destructring an array
const names = ['Corinne', 'Leila', 'John', 'Smith'];
const [name1, name2, name3, name4] = names;
console.log(`${name1} ${name2} ${name3} ${name4}`);


