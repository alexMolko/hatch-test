const readJson= require ("./readJson") // Se importan los datos

//Función principal a retornar
const optionsPerYear = year => {

    // Se filtran primeramente los coches que entran en el rango del año solicitado
    const filterByRange = readJson.filter(function (el)  {
      return (year>= el.yearRange[0] && year <= el.yearRange[1])
     })

    // Se crea una función para retornar un arreglo filtrado de 'coverageType' donde se pasa como parámetro el tipo de coverageType 
    const filterFunction = coverageType => filterByRange.filter( el => el.coverageType === coverageType)

    // Se crea una función para validar cuál es la mejor opción de precio por 'coverageType'
    const reduceFunction = array => array.reduce((el, acc) => el.price < acc.price ? el : acc);

    // Llamadas a la funciones 'filterFunction' y 'reduceFunction' por cada coverageType 
    // Se valida que filterFunction no sea un arreglo vacio
    const bestOptionRc= filterFunction("RC").length > 0 ? reduceFunction(filterFunction("RC")): {coverageType : "RC"}
    const bestOptionLow= filterFunction("Low").length > 0 ? reduceFunction(filterFunction("Low")): {coverageType : "Low"}
    const bestOptionMid= filterFunction("Mid").length > 0 ? reduceFunction(filterFunction("Mid")): {coverageType : "Mid"}
    const bestOptionHigh= filterFunction("High").length > 0 ? reduceFunction(filterFunction("High")): {coverageType : "High"}

    //Se guarda en un arreglo para facilitar la manipulación de datos en el cliente
    const finalArray = []
    finalArray.push(bestOptionRc)
    finalArray.push(bestOptionLow)
    finalArray.push(bestOptionMid)
    finalArray.push(bestOptionHigh)

    return finalArray
}



module.exports = optionsPerYear