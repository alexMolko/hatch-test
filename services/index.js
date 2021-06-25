//Importación de los servicios implementados
const readJson = require('./readJson') // Patrón singleton
const optionPerYear = require ('./optionsPerYear')
//Exportación de servicios
module.exports = {
    readJson,
    optionPerYear
}