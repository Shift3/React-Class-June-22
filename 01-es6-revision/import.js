import data, { sayHello, read } from './util.js';

const updatedData = data;
updatedData.push(4);

console.log(data);
console.log(updatedData);

sayHello('Helloooo!');
read('Learning JavaScript...');

const importantFunc = () => {
  console.log('Very usefull function');
}

export default importantFunc;


