let tinhDTB = (...numbers) => {
  console.log("😀 - tinhDTB - numbers", numbers);
  let tong = 0;
  // forEach
  numbers.forEach((item) => {
    tong += item;
  });
  return tong / numbers.length;
};

let kq1 = tinhDTB(2, 4, 6, 7, 8, 9, 10, 10);
console.log("😀 - kq1", kq1);
