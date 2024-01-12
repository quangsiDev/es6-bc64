let tinhDTB = (toan, ly, hoa = 0) => (toan + ly + hoa) / 3;

let diem1 = tinhDTB(5, 7, 9);
console.log("😀 - diem1", diem1);
let diem2 = tinhDTB(5, 7);
console.log("😀 - diem2", diem2);

let sayHello = (user = "Bạn yêu") => {
  console.log(` hello ${user}`);
};

sayHello("Hân");
sayHello();
