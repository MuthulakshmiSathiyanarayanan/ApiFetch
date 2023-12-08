const WineComponent = (props) => {
  const { winery, location, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="wineImage" src={image}></img>
      <span className="productName">{winery}</span>
      {/* <span> {location}</span> */}
    </div>
  );
};
export default WineComponent;
