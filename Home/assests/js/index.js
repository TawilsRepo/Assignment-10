document.getElementsByTagName('h1')[0].innerHTML += localStorage.getItem('logged');

var logOut = document.getElementById('logOut');

logOut.addEventListener('click', function () {
    location.replace("../index.html");
})