//function expression
function funcExp(...nums){
  const total = nums.reduce(function(x, y){
    return x+y;
  });
  console.log('Total calculated using function expression:', total);
}

funcExp(4, 5, 6, 7, 9);

// Arrow functions
const arrowFunc = (...nums)=> {
  const total = nums.reduce((x, y) => {
    return x+y;
  });
  console.log('Total caclculated using arrow function:', total);
}
arrowFunc(4, 5, 6, 7, 9);