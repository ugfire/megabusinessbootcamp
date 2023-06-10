function login() {
  var pass = document.getElementById("passwd").value;

  if (pass == "business") {
    console.log(pass);
    window.location.href = "messages.html";
  } else {
    //window.location.href = "messages.html";
    console.log(pass);
    // window.location.href = "login.html";
    window.location.href = "messages.html";
    alert("Login Denied !");
  }
}
