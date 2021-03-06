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
/*-----------------Weather Data------------------*/

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const weatherAPI = jsObject;

    document.getElementById('valCurrent').textContent = weatherAPI.weather[0].main;
    document.getElementById('valHigh').textContent = weatherAPI.main.temp_max.toFixed(1);
    document.getElementById('valHumid').textContent = weatherAPI.main.humidity;
	document.getElementById('valWind').textContent = weatherAPI.wind.speed;
	
  });

/*-----------------Forecast Data------------------*/

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	for (let i = 0; i < jsObject.list.length; i++ ){
		if (new Date(jsObject.list[i].dt_txt).getHours() == 18) {

			var forecastAPI = jsObject.list[i];
			
			let div1 = document.createElement('div');
			let div2 = document.createElement('div');
			let head = document.createElement('strong');
			let div3 = document.createElement('div');
			let image = document.createElement('img');
			let temp = document.createElement('p');

			const imageidentifier = forecastAPI.weather[0].main;
			if (imageidentifier == "Clear"){
				var imgSource = "images/clear.png";
			} 
			else if (imageidentifier == "Clouds"){
				var imgSource = "images/cloudy.png";
			}
			else if (imageidentifier == "Snow"){
				var imgSource = "images/snow.png";
			}
			else if (imageidentifier == "Rain" || imageidentifier == "Drizzle"){
				var imgSource = "images/rain.png";
			}
			else if (imageidentifier == "Thunderstorm"){
				var imgSource = "images/thunderstorm.png";
			}
			else {
				var imgSource = "images/mist.png"
			}


			head.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
			temp.innerHTML = forecastAPI.main.temp.toFixed(1) + " &#8457;";

			div1.appendChild(div2);
			div2.classList.add("Day");
			div2.appendChild(head);
			div3.classList.add("DayContent");
			div1.appendChild(div3);
			div3.appendChild(image);
			div3.appendChild(temp);

			document.querySelector('div.flex').appendChild(div1);

		}
	}
  });
