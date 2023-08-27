const input = document.getElementById('input');
const btn = document.querySelector('button')
const cardsContainer = document.querySelector('.cards-container');

const API_KEY = 'a1c39d495474748845de524223a464a4';

let city;
let latitude;
let longitude;

{/* <article class="card">
            <div class="card--city-container">
                <p>Bucaramanga <span>CO</span> </p>
                <img src="./assets/close.png" alt="close icon card">
            </div>
            
            <div class="card--temperature-container">
                <p>28</p>
                <span>°C</span>
            </div>
            
            <img class="card--img-weather" src="./assets/img-prueba.png" alt="card image weather">
            
            <p class="card--weather-description">nubes dispersas</p>
        </article> */}
const buildCard = (temperature, cityName, cityCountry, imgIcon, cityWeatherDescription) => {
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

const getLocalParameters = async (urlApi) => {
    let valueToReturn = null;

    try {
        const fetchData = await fetch(urlApi);
        
        if(fetchData.ok === true) {
            const data = await fetchData.json();
            latitude = data[0].lat
            longitude = data[0].lon
            
            valueToReturn = [latitude, longitude];

        } else {
            console.log('efe en el chat');
        }
    } catch(error) {
        console.log(error);
    }

    return valueToReturn;
}


const getWeather = async (latitude, longitude) => {
    let weatherToReturn = null;
    
    try {
        const fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        weatherToReturn = fetchData.then( (res) => res.json())

    } catch(error) {
        console.log(error);
    }

    return weatherToReturn;
};


btn.addEventListener('click', () => {
    city = input.value

    const weather = getLocalParameters(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
    
    weather.then((res) => {
        latitude = res[0];
        longitude = res[1];

        let latitudeAndLongitude = getWeather(latitude, longitude);
        console.log(latitudeAndLongitude);

        return latitudeAndLongitude;
    })
    .then((data) => {
        const temperature = Math.floor(data.main.temp - 273.15);
        const cityName = data.name;
        const cityCountry = data.sys.country;
        const imgIcon = data.weather[0].icon;
        const cityWeatherDescription = data.weather[0].description;

        buildCard(temperature, cityName, cityCountry, imgIcon, cityWeatherDescription);
    });
        
});




