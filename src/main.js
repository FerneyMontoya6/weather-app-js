import { buildCard } from "./use-cases/build-weather-card.js";
import { getLocalParameters } from "./use-cases/get-local-parameters.js";
import { getWeather } from "./use-cases/get-weather.js";
import { globalVariables } from "./use-cases/global-variables.js";


const showCard = (e) => {
    
    if (e.key === 'Enter' || e.type === 'click') {

        let city = globalVariables.input.value
    
        const weather = getLocalParameters(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${globalVariables.apiKey}`);
        
        weather.then((res) => {
            let latitude = res[0];
            let longitude = res[1];
    
            let latitudeAndLongitude = getWeather(latitude, longitude, globalVariables.apiKey);
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
    }

};

globalVariables.btn.addEventListener('click', showCard);
globalVariables.btn.addEventListener('keydown', showCard);



