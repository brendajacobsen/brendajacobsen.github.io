          
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-GB", options);
// const modoptions ={ second: "numeric", minute: "numeric", hour: "numeric", day: "numeric", month:"numeric", year: "numeric"};
//document.getElementById('lastModified').textContent=new Date(document.lastModified);
//document.getElementById('lastModified').textContent=document.lastModified;
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