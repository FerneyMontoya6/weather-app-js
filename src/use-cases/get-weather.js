export const getWeather = async (latitude, longitude, apiKey) => {
    let weatherToReturn = null;
    
    try {
        const fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        weatherToReturn = fetchData.then( (res) => res.json())

    } catch(error) {
        console.log(error);
    }

    return weatherToReturn;
};