import { globalVariables } from "./global-variables.js";
import { resetInput } from "./reset-input.js";

export const inputError = (error) => {
    resetInput();

    const labelInput = globalVariables.labelInput;
    const divWarningContainer = document.createElement('div');
    divWarningContainer.classList.add('div-warning-container');
    divWarningContainer.style.marginBottom = '2rem';
    divWarningContainer.style.display = 'flex';

    const input = globalVariables.input;
    input.style.marginBottom = '0.5rem';
    input.classList.add('input-error');
    
    
    const p = document.createElement('p');
    p.style.padding = '0';
    p.style.color = 'red';
    // Dependiendo de el error va a salir en pantalla un texto diferente
    if(error === 'city repeated') {
        p.innerText = 'La ciudad ingresada ya fue consultada';
    } else if (error === 'vacio') {
        p.innerText = 'Ingrese el nombre de una ciudad';
    } else if(error === 'ciudad invalida') {
        p.innerText = 'Ingrese un nombre de ciudad válido';
    }

    const imgWarning = document.createElement('img');
    imgWarning.src = 'https://cdn-icons-png.flaticon.com/512/4201/4201973.png';
    imgWarning.alt = 'warning icon';
    imgWarning.style.width = '1.8rem';
    imgWarning.style.height = '1.8rem';
    imgWarning.style.marginRight = '0.5rem';

    divWarningContainer.append(imgWarning, p);
    labelInput.appendChild(divWarningContainer)

    input.value = '';
}
