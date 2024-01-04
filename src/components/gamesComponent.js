const GamesComponent = (props) => {
  const { id, genre, name } = props;
  return (
    <div className="gamesContainer">
      <>Book Id: {id}</>
      <span className="bookName">{name}</span> <br />
      {/* {genre?.map((e) => (
        <span>{e}</span>
      ))} */}
    </div>
  );
};
export default GamesComponent;
