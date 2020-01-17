let date = new Date();
let year = date.getFullYear();

let lastModify = document.lastModified;

document.getElementById("currentyear").textContent = year;
document.getElementById("lastupdate").textContent = "Last Updated: " + lastModify;