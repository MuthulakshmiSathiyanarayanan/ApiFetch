function BeerComponent(props) {
  const { name, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="beerImage" src={image}></img>
      <br />
      <span className="productName">{name}</span>
    </div>
  );
}
export default BeerComponent;
