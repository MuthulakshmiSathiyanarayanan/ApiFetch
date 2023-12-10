import "../App.css";

const WineComponent = (props) => {
  const { winery, location, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="wineImage" src={image}></img>
      <br />
      <span className="productName">{winery}</span>
      {/* <span> {location}</span> */}
    </div>
  );
};
export default WineComponent;
