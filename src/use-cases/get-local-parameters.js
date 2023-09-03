import { inputError } from "./input-error.js";

/**
 * Está función trae los valores de latitud y longitud de la API
 * @param {String} urlApi Ejemplo -> "abcde123456kjt"
 * @returns {Array<String>} Retorna los valores de longitud y latitud
 */
export const getLocalParameters = async (urlApi) => {
    let valueToReturn = null;

    try {
        const fetchData = await fetch(urlApi);
        
        if(fetchData.ok === true) {
            const data = await fetchData.json();
            let latitude = data[0].lat
            let longitude = data[0].lon
            
            valueToReturn = [latitude, longitude];

        } else {
            console.log('efe en el chat');
        }
    } catch(e) {
        const error = 'ciudad invalida';
        inputError(error)
    }

    return valueToReturn;
}