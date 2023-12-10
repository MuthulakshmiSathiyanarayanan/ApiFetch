import React, { useEffect, useMemo, useRef, useState } from "react";

const SearchHotCoffee = () => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const focusElement = useRef(null);
  console.log(focusElement);

  const handleInputChange = (e) => {
    setSearchBoxValue(e.target.value);
    console.log(searchBoxValue);
  };

  const handleSearch = () => {
    return <p>{searchBoxValue}</p>;
  };
  useEffect(() => {
    console.log(focusElement);
    focusElement.current.focus();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={searchBoxValue}
        onChange={handleInputChange}
        ref={focusElement}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchHotCoffee;
