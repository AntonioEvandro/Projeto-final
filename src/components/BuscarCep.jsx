const BuscarCep = function (props) {
  return (
    <div className="dados">
      {props.cod ? (<>
        <div className="cep">Código Postal: {props.cod?.cep}</div>
        <div className="endereco">{props.cod?.address}</div>
        <div className="distrito">Bairro/Distrito: {props.cod?.district}</div>
        <div className="cidade">Cidade: {props.cod?.city}</div>
        <div className="estado">UF: {props.cod?.state}</div>
        <div className="ddd">DDD: ({props.cod?.ddd})</div>
        </>):(<span>Digite um CEP</span>)}
    </div>
  );
};

export default BuscarCep;
