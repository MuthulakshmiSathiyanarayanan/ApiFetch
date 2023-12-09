import React, { useEffect, useRef, useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const focusElement = useRef(null);
  console.log(focusElement);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    console.log(focusElement);
    focusElement.current.focus();
  }, []);

  return (
    <div>
      <input value={query} onChange={handleInputChange} ref={focusElement} />
      <button>Search</button>
    </div>
  );
};

export default SearchBox;
