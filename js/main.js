function btnSubmit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "admin") {
    alert("Login Successful");
    return false;
  } else {
    alert("Invalid username or password");
  }
}
