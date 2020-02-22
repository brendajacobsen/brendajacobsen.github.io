/*Establish variables to get temperature and wind speed from HTML document*/
let t = document.getElementById('temp').innerHTML;
let s = document.getElementById('windspeed').innerHTML;

/*Establish temperature requirement of equal to or less than 50 degrees and wind speed equal to or greater than 3 mph to calculate wind chill factor*/
if ((t <= 50) && (s >= 3)) {
  /*Establish variable "f" to hold value of wind chill calculation using "t" and "s" values*/
  let f = (35.74 + 0.6215*t) - (35.75*Math.pow(s,0.16)) + 0.4275*t*(Math.pow(s,0.16));
  
  /*If "t" and "s" requirements are met, display "f" wind chill factor calculation to span id "windChill", rounded to integer.*/
  document.getElementById('windchill').innerHTML = Math.round(f);
}

/*If "t" and "s" requirements are NOT met, display "N/A" to span id "windChill"*/
else {
  document.getElementById('windchill').innerHTML = 'N/A';
};