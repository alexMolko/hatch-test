import React, {useState} from 'react'
import CarByYear  from "./components/CarByYear";
import QuoteCar from './components/CarQuotes';
function App() {

  const [state,setState] = useState("");

  const [infoYear, setInfoYear] = useState([]);

  const [quoteCar, setquoteCar] = useState({
    brand: "",
    year: 0,
    hasAC: true
  });

  const [infoQuoteCar, setInfoQuoteCar] = useState([]);

  const handleChange =  e => setState(e.target.value)

  const handleFormChange = (event) => {
    const {name,value,type,checked} = event.target;
    type ==='checkbox' ? 
    setquoteCar({
      ...quoteCar,
      [name] : checked
     }):
    setquoteCar({
      ...quoteCar,
      [name] : value
     })
    
  }

  const onYearOption = async year => {
    const response = await fetch("http://localhost:3000/bestperyear/"+ year)
    const json= await response.json()
    setInfoYear(json)
  }

  const onQuoteCar = async quoteCar => {
    console.log(quoteCar)
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({quoteCar}),
      headers: {"Content-Type": "application/json"}
     };
    const response = await fetch("http://localhost:3000/quoteCar", requestOptions)
    const json= await response.json()
    setInfoQuoteCar(json)
  }

  return (
    <main>
      <h2>Cotización de seguro de autos por año</h2>
      <CarByYear onYearOption = {onYearOption} year = {state} infoYear = {infoYear} handleChange = {handleChange}/>
      <br></br>
      <h2>Cotización de seguro de autos</h2>
      <QuoteCar handleFormChange = {handleFormChange} onQuoteCar = {onQuoteCar} quoteCar = {quoteCar}  infoQuoteCar = {infoQuoteCar} />
    </main>
  );
}

export default App;
