let account = "tommy";

// khi value là biến trùng với key, thì có xoá
let user = {
  //   account: account,
  account,
};

console.log(user.account);
