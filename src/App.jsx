import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Buscar Cep</h1>
      <div className="ceps">
        <BuscarCep />
      </div>
    </div>
  );
}

export default App;
