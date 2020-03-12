/*-----------------Menu+date------------------*/
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}
var day = new Date();
var today = day.getDay();

if(today == 5) {
	document.getElementById("popup").className = "show";
}

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//-----------------Town Data---------------------

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){       

            let card = document.createElement('section');
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('strong');
            let yearFound = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            div.classList.add("col-1");
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFound.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            div2.classList.add("col-2");
            image.setAttribute('src', "assets/" + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            
            card.appendChild(div);
            card.appendChild(div2);
            div.appendChild(h2);
            div.appendChild(motto);
            div.appendChild(yearFound);
            div.appendChild(population);
            div.appendChild(rainfall);
            div2.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    }
  });

//-----------------Lazy Loading------------------

const images = document.querySelectorAll("[data-src]");

function preloadImage(img){ //substitutes the images
    const src = img.getAttribute("data-src");
    if (!src) { return; }
    img.src = src;
}

function removeImg(img){ //removes the data-src attribute so the blue effect in CSS will be removed
    img.removeAttribute("data-src");
}

const ImgOptions = {
    rootMargin: "0px 0px -300px 0px" 
};

const ImgObserver = new IntersectionObserver((entries, ImgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            ImgObserver.unobserve(entry.target);
            removeImg(entry.target);
        }
    });
}, ImgOptions);

images.forEach(image => {
    ImgObserver.observe(image);
})
