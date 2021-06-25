const express = require ("express")
const parser= require("body-parser");
const services= require ("./services")
const handlers = require ("./handlers")


const app= express();
const port =3000;

// Se obtiene la información que se pasa desde el cliente
app.use(parser.urlencoded({extended: false}));


//Se llama al manejador de servicios 
app.get('/bestperyear/:year', handlers(services).bestOptionsPerYear) //patron de dependencias 
app.listen(port, ()=> console.log("Example app listening on port "+port))