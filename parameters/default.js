// default paramter

function add(oprnd1, oprnd2=10){
  return oprnd1+oprnd2;
}
console.log(add(10));

function add_(oprnd1, oprnd2={value:10}){
  return oprnd1+oprnd2.value;
}
console.log(add_(10,{value:20}));

// rest parameters 

const isNumber = v => typeof v === 'number';

// old way
function checkNum(){
  const argArr = Array.prototype.slice.call(arguments);
  return argArr.every(isNumber);
}
console.log(checkNum(10,2,3,4,5));
console.log(checkNum(10,2,3,"22",4,5));

// by rest parameter
function checkNumByRest(...args){
  return args.every(isNumber);
}
console.log(checkNumByRest(10,2,3,4,5));
console.log(checkNumByRest(10,2,3,"22",4,5));
