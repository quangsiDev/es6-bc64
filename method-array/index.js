let numberArr = [2, 4, 6];

// forEach ~ duyệt mảng

numberArr.forEach((item) => {
  console.log("item", item);
});

// map ~ duyệt mảng và tạo ra mảng mới

let newArr = numberArr.map((item) => {
  return item * 10;
});

// reduce ~ duyệt mảng và tính toán

let result = numberArr.reduce((sum, current) => {
  return sum + current;
}, "");
console.log("😀 - result - result", result);
