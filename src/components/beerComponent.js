const BeerComponent = (props) => {
  const { name, price, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="image" src={image}></img>
      <span className="productName">{name}</span>
    </div>
  );
};
export default BeerComponent;
