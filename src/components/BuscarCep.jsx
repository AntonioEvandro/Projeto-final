const BuscarCep = function (props) {
  return (
    <div className="cep">
      {console.log(props.cod)}
      <div className="item">{props.cod?.cep}</div>
      <div className="item">{props.cod?.address}</div>
      <div className="item">{props.cod?.district}</div>
      <div className="item">{props.cod?.state}</div>
      <div className="item">{props.cod?.ddd}</div>
    </div>
  );
};

export default BuscarCep;
