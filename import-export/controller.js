export let username = "alice";
export let email = "alice@gmail.com";
export let sayHello = () => {
  console.log("hello");
};
/**
 *  2 loại export
 *
 * export thường => import { trùng tên } ~ export nhiều lần
 *
 * export default => import tên tuỳ chọn ~ mỗi file chỉ được export default 1 lần
 *
 */

let title = "Dự án cuối khoá";
export default title;
