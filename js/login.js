function login() {
  var uname = document.getElementById("username").value;
  var pass = document.getElementById("password");

  if ((uname = "chris" && pass == "business")) {
    window.location.href = "messages.html";
  } else {
    //window.location.href = "messages.html";
    window.location.href = "login.html";
    alert("Login Denied !");
  }
}
