
export const globalVariables = (() => {
    
    const API_KEY = 'a1c39d495474748845de524223a464a4';

    function getApiKey() {
        return API_KEY;
    }

    return {
        apiKey: getApiKey(),
        input: document.getElementById('input'),
        btn: document.querySelector('button')
    }
})();