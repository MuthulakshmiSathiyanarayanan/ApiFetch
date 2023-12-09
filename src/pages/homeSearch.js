import React, { useEffect, useMemo, useRef, useState } from "react";

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
      <button className="header">Search</button>
      <DummyMemoFunction />
    </div>
  );
};

export default SearchBox;

const DummyMemoFunction = () => {
  const [counter, setCounter] = useState(2); //tried a sample  dummy fun for useMemo
  const [sampleArray, setSampleArray] = useState([1, 2, 5, 3]);
  function showMax() {
    console.log("changing sampleArray");
    return Math.max(...sampleArray);
  }
  const memoValue = useMemo(() => showMax(), [sampleArray]); //sampleArray is the dependency but no update fun has been written
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter </button>
      <button onClick={() => setSampleArray([...sampleArray, 10 * counter])}>
        {" "}
        Array
      </button>
      <p>{JSON.stringify(sampleArray)}</p>
      <p>{memoValue}</p>
      <span> {counter}</span>
    </div>
  );
};
