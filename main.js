const input = document.getElementById('input');
const btn = document.querySelector('button')
const p = document.querySelector('.response');

const API_KEY = 'a1c39d495474748845de524223a464a4';

let city;
let latitude;
let longitude;

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

        let hola = getWeather(latitude, longitude);
        console.log(hola);
        return hola;
    })
    .then((data) => {
        const temperatureInKelvin = data.main.temp - 273.15;

        p.innerHTML = temperatureInKelvin;
    });
        
});




