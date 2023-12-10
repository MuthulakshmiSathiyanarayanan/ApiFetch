import React, { useEffect, useMemo, useRef, useState, useContext } from "react";
import { SearchKeyContext } from "../App";
//header search box to find whether useRef focus works

const SearchBox = () => {
  const inputRef = useRef(null);
  const [globSearch, setGlobSearch] = useContext(SearchKeyContext);

  const handleSearch = () => {
    const srcValue = inputRef?.current?.value;
    setGlobSearch(srcValue);
  };

  return (
    <>
      <div>
        <input ref={inputRef} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <span>
        This is the search result for: <b>{globSearch}</b>
      </span>
    </>
  );
};
//useMemo hook implementation for a sample function not associated with any of the api fetched pages
/* const DummyMemoFunction = () => {
  const [counter, setCounter] = useState(2); //tried a sample  dummy fun for useMemo
  const [sampleArray, setSampleArray] = useState([1, 2, 5, 3]);
  function showMax() {
    console.log("changing sampleArray");
    return Math.max(...sampleArray);
  }
  const memoValue = useMemo(() => showMax(), [sampleArray]); //sampleArray is the dependency but no update fun has been written
  return (
    <div className="memoFun">
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
};*/
export { SearchBox /* DummyMemoFunction */ };
