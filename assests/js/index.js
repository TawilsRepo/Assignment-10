var email = document.getElementById("email");
var pass = document.getElementById("pass");

var login = document.getElementById("login");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

login.addEventListener("click", function () {
  if (users == 0) {
    document.getElementById("error").innerHTML = "Wrong Inputs";
  }
  if (email.value == "" || pass.value == "") {
    document.getElementById("error").innerHTML = "All inputs are required";
  } else {
    for (var i = 0; i < users.length; i++) {
      if (users[i].email == email.value && users[i].pass == pass.value) {
        localStorage.setItem("logged", users[i].userName);
        window.location.href = "Home/index.html";
        break;
      } else {
        document.getElementById("error").innerHTML = "Wrong Inputs";
      }
    }
  }
});
