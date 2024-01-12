function sayHello() {}

let sayGoodbye = () => {
  console.log("bai bai");
};

sayGoodbye();

// let getSum = (value1, value2) => {
//   let sum = value1 + value2;
//   return sum;
// };
let getSum = (value1, value2) => value1 + value2;

// anfn
let result1 = getSum(5, 6);
console.log("😀 - result1", result1);
getSum(10, 6);

let sayHi = (name) => {
  console.log("hi", name);
};
