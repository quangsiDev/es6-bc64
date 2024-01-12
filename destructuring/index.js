// object
let user = {
  name: "alice",
  gmail: "alice@gmail.com",
  pet: {
    name: "kiki",
  },
};

let { name, gmail } = user;
console.log("😀 - gmail", gmail);
console.log("😀 - name", name);

// lấy ra key name từ object user.pet và đổi tên thành petName
let { name: petName } = user.pet;
console.log("😀 - petName", petName);

// array
let colors = ["red", "black"];

let [c1, c2] = colors;
console.log("😀 - c2", c2);
console.log("😀 - c1", c1);
