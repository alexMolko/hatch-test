const express = require ("express")
const parser= require("body-parser");
const services= require ("./services")
const handlers = require ("./handlers")
const cors = require('cors')

const app= express();
const port =3000;

// Se obtiene la información que se pasa desde el cliente
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Habilitamos los Cors necesarios para consumir la página
let corsOptions = {
  origin: '*',
  header: '*',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

//Se llama al manejador de servicios 
app.get('/bestperyear/:year', handlers(services).bestOptionsPerYear) //patron de dependencias 
app.post('/quoteCar/', handlers(services).quoteCar)
app.listen(port, ()=> console.log("Example app listening on port "+port))