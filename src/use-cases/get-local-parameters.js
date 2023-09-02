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
    } catch(error) {
        console.error('ciudad invalida');
    }

    return valueToReturn;
}