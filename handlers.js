module.exports = ({optionPerYear}) =>( {

    bestOptionsPerYear: (req, res) => {
        //Se llama al servicio y se le pasa como parámetro el año
        const data = optionPerYear (req.params.year)
        return res.json(data)
    }
})