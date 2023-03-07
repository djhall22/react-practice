import React from "react";
import { useState } from "react";

const Categories = () => {
  const [count, setCount] = useState(2);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button onClick={incrementCount}> + </button>
      <span>{count}</span>
      <button onClick={decrementCount}> - </button>
    </div>
  );
};

export default Categories;
