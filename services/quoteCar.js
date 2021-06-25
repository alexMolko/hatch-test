const readJson= require ("./readJson")

//Función principal a retornar
const QuoteCar = objectValues => {
    // Se convierte el valor de year a int para no tener errores
	objectValues.year = parseInt(objectValues.year)

    // Se filtran primeramente los coches que entran en el rango del año solicitadoy con el tipo de brand especificado
    const filterByCarObject = readJson.filter(function (el)  {
        return (
            (objectValues.year >= el.yearRange[0] && objectValues.year <= el.yearRange[1]) &&
            objectValues.brand === el.brand        
        )
    })
	
    //Se crea una función para sumarle al precio el extraCoveragePrice en caso de que hasAC sea true 
    // de otra forma se conservan los mismos valores 
    const finalCarArray = objectValues.hasAC ? filterByCarObject.map(el => {
        return (
            {
                ...el,
                price : parseFloat(el.price.replace(/,/g, '')) + parseFloat(el.extraCoveragePrice)
            }
            
        )
    }): filterByCarObject.map(el => {
        return (
            {
                ...el,
                price : parseFloat(el.price.replace(/,/g, ''))
            }
        )
    })
    
    // Se crea función para filtrar la información por coverageType
    const   getCoverageType = coverageType => finalCarArray.filter( el => el.coverageType === coverageType)

    // Se crea una función para validar cuál es la mejor opción de precio por 'coverageType'
    const reduceFunction = coverageType => coverageType.reduce((el, acc) => el.price < acc.price ? el : acc);

    // Llamadas a la funciones 'getCoverageType' y 'reduceFunction' por cada coverageType 
    // Se valida que getCoverageType no sea un arreglo vacio
    const bestOptionRc = getCoverageType("RC").length > 0 ? reduceFunction(getCoverageType("RC")): {coverageType : "RC"}
    const bestOptionLow = getCoverageType("Low").length > 0 ? reduceFunction(getCoverageType("Low")): {coverageType : "Low"}
    const bestOptionMid = getCoverageType("Mid").length > 0 ? reduceFunction(getCoverageType("Mid")): {coverageType : "Mid"}
    const bestOptionHigh = getCoverageType("High").length > 0 ? reduceFunction(getCoverageType("High")): {coverageType : "High"}
    
    //Se crea y se agregan los arreglos a un arreglo final
    const finalResult = [] 
    finalResult.push(bestOptionRc)
    finalResult.push(bestOptionLow)
    finalResult.push(bestOptionMid)
    finalResult.push(bestOptionHigh)
	
	return finalResult;
}

module.exports = QuoteCar
