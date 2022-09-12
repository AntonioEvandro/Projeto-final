import { useState } from 'react';
import './App.css';
import api from './services/api';
import BuscarCep from './components/BuscarCep';

function App() {
  const [cep, setCep] = useState([]);

  const getCep = async (codCep) => {
    const newCep = await api
      .get(`${codCep.toString()}/json`)
      .then((response) => response.data)
      .catch((err) => console.log(err));

    //   console.log(newCep.data)
    setCep([cep, newCep]);
  };

  const [codigoCep, setCodigoCep] = useState([]);
  const mudar = (e) => {
    setCodigoCep(e.target.value);
  };

  getCep(codigoCep);

  console.log(cep);

  return (
    <div className="App">
      <h1>Buscar Cep</h1>

      <div className="containerCep">
        <form className="form">
          <input
            type="search"
            value={codigoCep}
            onChange={mudar}
            className="search"
            placeholder="Digite o CEP"
            required
          ></input>
        </form>

        <div className="busca">
          {cep?.map((cod) => {
            return <BuscarCep cod={cod} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
