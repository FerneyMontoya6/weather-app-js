import { globalVariables } from "./global-variables.js";

const cardsContainer = document.querySelector('.cards-container');

/**
 * Función que hace toda la contrucción de una nueva card
 * @param {Number} temperature Ejemplo -> 27
 * @param {String} cityName Ejemplo -> Medellín 
 * @param {String} cityCountry Ejemplo -> Colombia 
 * @param {String} imgIcon Ejemplo -> https://image.jpg
 * @param {String} cityWeatherDescription Ejemplo -> light rain
 */
export const buildCard = (temperature, cityName, cityCountry, imgIcon, cityWeatherDescription) => {
    const card = document.createElement('article');
    card.className = 'card';
    cardsContainer.appendChild(card)

    const cardCityContainer = document.createElement('div');
    cardCityContainer.className = 'card--city-container';
    card.appendChild(cardCityContainer);

    const pCardCityContainer = document.createElement('p');
    pCardCityContainer.innerText = cityName;

    const spanCardCityContainer = document.createElement('span');
    spanCardCityContainer.innerText = cityCountry;
    pCardCityContainer.appendChild(spanCardCityContainer);

    const cityAndCountryContainer = document.createElement('div')
    cityAndCountryContainer.style = 'display:flex';
    cardCityContainer.appendChild(cityAndCountryContainer)
    cityAndCountryContainer.append(pCardCityContainer, spanCardCityContainer)

    const imgCardCityContainer = document.createElement('img');
    imgCardCityContainer.src = './assets/close.png'
    imgCardCityContainer.alt = 'close icon card';
    imgCardCityContainer.loading = 'lazy';
    
    // Se añade evento al icono de close de la carta
    imgCardCityContainer.addEventListener('click', () => {

      const citiesArray = globalVariables.getCitiesConsulted();
      const indexToRemove = citiesArray.indexOf(cityName);

      if(indexToRemove !== -1) {
            citiesArray.splice(indexToRemove, 1)
      }
      card.remove()
    })
    cardCityContainer.append(imgCardCityContainer);

    const cardTemperatureContainer = document.createElement('div'),
          pCardTemperatureContainer = document.createElement('p'),
          spanCardTemperatureContainer = document.createElement('span');
    cardTemperatureContainer.className = 'card--temperature-container';
    card.appendChild(cardTemperatureContainer);
    
    pCardTemperatureContainer.innerText = temperature;
    spanCardTemperatureContainer.innerText = '°C';
    pCardTemperatureContainer.append(spanCardTemperatureContainer);
    cardTemperatureContainer.append(pCardTemperatureContainer, spanCardTemperatureContainer);
    
    const cardImgWeather = document.createElement('img'),
          cardWeatherDescription = document.createElement('p');
    cardWeatherDescription.className = 'card--weather-description';

    cardImgWeather.src = `https://openweathermap.org/img/wn/${imgIcon}@2x.png`;
    cardImgWeather.alt = 'card image weather';
    cardWeatherDescription.innerText = cityWeatherDescription;
    card.append(cardImgWeather, cardWeatherDescription);
}