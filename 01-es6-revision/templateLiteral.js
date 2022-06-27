// Non template literal
const word1 = 'Mehdi';
const word2 = 'Aitbrahim';

let fullName = word1 + ' ' + word2;
console.log('full name using none template literal:', fullName);

let returnToNewLine = 'Learn \n React.js is \n really goooooood!';
console.log('Return to the new line not using template literal: ', returnToNewLine);

// Template Literal
fullName = `${word1} ${word2}`;
console.log('full name using template literal:', fullName);

returnToNewLine = `Learn 
React.js is 
really goooooood!`;

console.log('Return to the new line using template literal: ', returnToNewLine);

