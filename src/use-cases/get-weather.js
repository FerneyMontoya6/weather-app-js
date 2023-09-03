/**
 * Función para obtener en formato JSON la información necesaria de la API
 * @param {Number} latitude Ejemplo -> -75.415646
 * @param {Number} longitude Ejemplo -> 4587.21646
 * @param {String} apiKey Ejemplo -> "abcde123456kjt"
 * @returns {Object} 
 */
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