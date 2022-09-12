const BuscarCep = function (props) {
  return (
    <div className="cep">
      <div className="item">{props.cod?.cep}</div>
      <div className="item">{props.cod?.localidade}</div>
      <div className="item">{props.cod?.uf}</div>
      <div className="item">{props.cod?.ddd}</div>
    </div>
  );
};

export default BuscarCep;
