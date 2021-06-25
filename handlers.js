module.exports = ({optionPerYear,quoteCar}) =>( {

    bestOptionsPerYear: (req, res) => {
        //Se llama al servicio y se le pasa como parámetro el año
        const data = optionPerYear (req.params.year)
        return res.json(data)
    },
    quoteCar : (req, res) => {
        const data = quoteCar(req.body.quoteCar)
        return res.json(data);
    },
})