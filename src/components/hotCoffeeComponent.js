const HotCoffeeComponent = (props) => {
  const { title, description, image } = props;
  return (
    <div>
      <img className="coffeeImage" src={image}></img>
      <br />
      <span className="productName">
        {title}
        <br></br>
      </span>
    </div>
  );
};
export default HotCoffeeComponent;
