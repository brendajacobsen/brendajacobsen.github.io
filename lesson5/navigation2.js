const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}
function showBanner() {
  var today= new Date();
  var wkday= today.getDay();
  if (wkday == 5){
  document.getElementById("banner").classList.toggle("noshow");
 
}