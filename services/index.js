//Importación de los servicios implementados
const readJson = require('./readJson') // Patrón singleton
const optionPerYear = require ('./optionsPerYear')
const quoteCar = require ('./quoteCar')

//Exportación de servicios
module.exports = {
    readJson,
    optionPerYear,
    quoteCar
}