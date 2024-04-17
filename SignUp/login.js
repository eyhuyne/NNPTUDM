let apiUser = "http://localhost:3000/user";

//login
const confirmpassword = document.querySelector(".input-signup-confirmpassword");
const mail = document.querySelector(".input-signup-mail");
const username = document.querySelector(".input-login-username");
const password = document.querySelector(".input-login-password");
const bntLogin = document.querySelector(".login__signInButton");


// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};
// Hàm xác thực đăng nhập
function authenticate(username, password) {
  // Kiểm tra xem người dùng có tồn tại trong danh sách không
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Người dùng đã xác thực thành công
    return user;
  } else {
    // Người dùng không hợp lệ
    return null;
  }
}
// Hàm kiểm tra quyền truy cập
function checkAccess(user, role) {
  // Kiểm tra xem vai trò của người dùng có phù hợp không
  return user && user.role === role;

}
const user = [
  {username:"admin",password:"admin",role:"admin"},
  {username:"user1",password:"user1",role:"user"}
    ]
// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Vui lòng không để trống");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.username == username.value && user.password == password.value
      );
      if (user.checkAccess = true) {
        alert("Đăng nhập thành công");
        window.location.href = " ../index.html";
        document.querySelector('#login-btn')
      } else {
        alert("Đăng nhập thất bại");
      }
    });
  }
});
const button = document.querySelector('#login-btn');
const disabledButton = () => {
  bntLogin.disabledButton = true;
};
bntLogin.addEventListener('click', disabledButton);
