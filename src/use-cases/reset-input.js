import { globalVariables } from "./global-variables.js";

export const resetInput = () => {
    const labelInput = globalVariables.labelInput;
    const input = globalVariables.input;
    input.value = '';
    input.style.marginBottom = '2rem';
    input.classList.remove('input-error');

    const divWarningContainer = document.querySelector('.div-warning-container');

    if (divWarningContainer !== null) {
        labelInput.removeChild(divWarningContainer);
    }
}