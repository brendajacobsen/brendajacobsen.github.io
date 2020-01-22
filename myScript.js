let date = new Date( document.lastModified);
let year = date.getFullYear();

let lastmod = document.lastModified;

document.getElementById("currentyear").textContent = year;
document.getElementById("lastmod").textContent = "Last Updated: " + lastModify;