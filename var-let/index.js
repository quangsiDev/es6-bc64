// var ~ cho phéo tạo nhiều biến trùng tên

console.log(username);
var username = "alice";
var username = "bob";

// let ~ không cho phép tạo 2 biến trùng tên
let account = "alice";
// let account = "bob";

// scope ~ phạm vi hoạt động

// function scope ~ var
var isLogin = true;
function checkLogin() {
  if (isLogin) {
    var message = "Success";
  } else {
    var message = "Fail";
  }
  console.log(message); // ok ~ ko bị lỗi
}
checkLogin();
// block scope
let is_login = true;

function check_login() {
  if (is_login) {
    let message = "Success";
  } else {
    let message = "Fail";
  }
  //   console.log(message); // error
}
check_login();
// 1 : ko lỗi
// 0 :lỗi
