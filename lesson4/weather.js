const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}
var d = new Date();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var fecha = dayNames[d.getDay()] +", " + d.getDate() + " "+ dayMonths[d.getMonth()] + " "+ d.getFullYear();

document.getElementById("currentdate").innerHTML=fecha;