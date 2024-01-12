let cat1 = {
  name: "miu",
  age: 2,
};

let cat2 = { ...cat1, name: "tom", age: 3, color: "black" }; // shallow copy
// cat2.name = "tom";

console.log("😀 - cat2", cat2);
console.log("😀 - cat1", cat1);

let a = 2;
let b = a;
b = 0;
// a=?
console.log("😀 - a", a);

// pass by value : number, string, boolean

// pass by reference: object, array

// shallow copy and deep copy

// array

let arr1 = [2, 4];
let arr2 = [...arr1, 6, 7, 8, 9];
// arr2.push(6);
console.log("😀 - arr1", arr1);
console.log("😀 - arr2", arr2);
