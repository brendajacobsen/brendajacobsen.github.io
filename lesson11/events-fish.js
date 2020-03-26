const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
   
    /*Construct variable using name of JSON file*/
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Fish Haven') {
      
      let card = document.createElement('section');

      let h3 = document.createElement('h3');
      /*Create variables to store info into "p" elements*/
      let event1 = document.createElement('p');
      let event2 = document.createElement('p');
      let event3 = document.createElement('p');
      let event4 = document.createElement('p');

      h3.textContent = 'Upcoming ' + towns[i].name + ' Events';
      card.appendChild(h3);
      
      event1.textContent = towns[i].events[0];
      card.appendChild(event1);

      event2.textContent = towns[i].events[1];
      card.appendChild(event2);

      event3.textContent = towns[i].events[2];
      card.appendChild(event3);

      event4.textContent = towns[i].events[3];
      card.appendChild(event4);

      document.querySelector('div.cards').appendChild(card);
      }
    }
    
  });