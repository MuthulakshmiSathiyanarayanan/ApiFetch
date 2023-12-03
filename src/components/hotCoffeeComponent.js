const HotCoffeeComponent = (props) => {
  const { title, description, image } = props;
  return (
    <div className="container" style={{ marginLeft: 10, marginRight: 10 }}>
      <img className="image" src={image}></img>
      <br />
      <span className="productName" style={{ fontSize: "large" }}>
        {title}
      </span>
      {/* <span className="description"> {description}</span> */}
    </div>
  );
};
export default HotCoffeeComponent;
