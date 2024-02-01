var userName = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("pass");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

var SignUp = document
  .getElementById("submit")
  .addEventListener("click", function () {
    if (userName.value == "" || email.value == "" || pass.value == "") {
      document.getElementsByTagName("p")[0].classList.remove("d-none");
      document
        .getElementsByTagName("p")[0]
        .classList.replace("text-success", "text-danger");
      document.getElementsByTagName("p")[0].innerHTML =
        "All inputs is required";
    } else {
      var account = {
        userName: userName.value,
        email: email.value,
        pass: pass.value,
      };

      var flag = false;

      for (var i = 0; i < users.length; i++) {
        if (JSON.stringify(users[i]) == JSON.stringify(account)) {
          document.getElementsByTagName("p")[0].classList.remove("d-none");
          document
            .getElementsByTagName("p")[0]
            .classList.replace("text-success", "text-danger");
          document.getElementsByTagName("p")[0].innerHTML =
            "email already exists";
          flag = true;
          break;
        }
      }

      if (flag == false) {
        users.push(account);
        document.getElementsByTagName("p")[0].classList.remove("d-none");
        document
          .getElementsByTagName("p")[0]
          .classList.replace("text-danger", "text-success");
        document.getElementsByTagName("p")[0].innerHTML = "Success!";
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  });
