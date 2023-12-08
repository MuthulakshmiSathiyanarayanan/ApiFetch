const HotCoffeeComponent = (props) => {
  const { title, description, image } = props;
  return (
    <div className="container" style={{ marginLeft: 10, marginRight: 10 }}>
      <img className="coffeeImage" src={image}></img>
      <br />
      <span style={{ fontSize: "large" }}>
        {title}
        <br></br>
      </span>

      {/*   < span className="description"> {description}</span> */}
    </div>
  );
};
export default HotCoffeeComponent;
