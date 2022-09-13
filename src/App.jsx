import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';
import BuscarCep from './components/BuscarCep';
import Cep from "react-simple-cep-mask";

function App() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState([])

  const getCep = async (codCep) => {
    const newCep = await api
      .get(`${codCep.toString()}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));

    console.log(newCep.data)
    setCepData(newCep)
  };

  useEffect (()=>{
    console.log("Tamanho: " + cep.length)
    console.log("CEP: " + cep)
    if(cep.length === 9) {
      getCep(cep);
    } 
  },[cep])

  //getCep(codigoCep);

  //console.log(cep);

  return (
    <div className="App">
      <h1>Buscar Cep</h1>

      <div className="containerCep">
        <Cep
          value={cep}
          onChange={ (cep) => setCep(cep) }
          className="someClass"
          placeholder="Digite seu cep"
        />

        <div className="busca">
          <BuscarCep cod={cepData} />
        </div>

        <h4>Masked value: {cep}</h4>
      </div>
    </div>
  );
}

export default App;
