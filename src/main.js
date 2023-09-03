import { buildCard } from "./use-cases/build-weather-card.js";
import { getLocalParameters } from "./use-cases/get-local-parameters.js";
import { getWeather } from "./use-cases/get-weather.js";
import { globalVariables } from "./use-cases/global-variables.js";
import { chekRepetitionCity } from "./use-cases/check-repetition-city.js";
import { inputError } from "./use-cases/input-error.js";
import { resetInput } from "./use-cases/reset-input.js";

const showCard = (e) => {
    
    if (e.key === 'Enter' || e.type === 'click') {

        let city = globalVariables.input.value

        if(city !== '') {

            const weather = getLocalParameters(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${globalVariables.apiKey}`);

            if (weather !== null) {
                weather.then((res) => {
                    let latitude = res[0];
                    let longitude = res[1];
            
                    let latitudeAndLongitude = getWeather(latitude, longitude, globalVariables.apiKey);
            
                    return latitudeAndLongitude;
                })
                .then((data) => {
                    const cityName = data.name;
                    const cityRepeated = chekRepetitionCity(cityName);
        
                    if(!cityRepeated) {
                        const temperature = Math.floor(data.main.temp - 273.15);
                        const cityCountry = data.sys.country;
                        const imgIcon = data.weather[0].icon;
                        const cityWeatherDescription = data.weather[0].description;
                        
                        buildCard(temperature, cityName, cityCountry, imgIcon, cityWeatherDescription);
                        globalVariables.addCityConsulted(cityName);
                    
                        resetInput();
                    } else {
                        const error = 'city repeated';
                        
                        inputError(error);
                    }
        
                }) 
            }
            
        } else {
            const error = 'vacio';
            inputError(error)
        }
    
    }

};

globalVariables.btn.addEventListener('click', showCard);
globalVariables.btn.addEventListener('keydown', showCard);



