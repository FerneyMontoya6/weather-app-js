import { globalVariables } from "./global-variables.js";

export const chekRepetitionCity = (cityToCompare) => {
    const citiesArray = globalVariables.getCitiesConsulted();

    return citiesArray.includes(cityToCompare);
}