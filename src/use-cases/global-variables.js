/**
 * Función que obtiene elementos HTML y la API key
 */
export const globalVariables = (() => {
    
    const API_KEY = 'a1c39d495474748845de524223a464a4';
    const citiesConsulted = []

    function getApiKey() {
        return API_KEY;
    }

    function addCityConsulted(newCity) {
        citiesConsulted.push(newCity);
    }
    function getCitiesConsulted() {
        return citiesConsulted
    }

    return {
        apiKey: getApiKey(),
        input: document.getElementById('input'),
        btn: document.querySelector('button'),
        labelInput: document.querySelector('.label-input'),
        addCityConsulted: function(newCity) {
            addCityConsulted(newCity);
        },
        getCitiesConsulted: function() {
           return getCitiesConsulted();
        }
    }
})();