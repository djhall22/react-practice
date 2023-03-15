import React from "react";

const Categories = ({ nameChange, name }) => {
  return (
    <div>
      <p> Hello {name}! </p>
      <button onClick={nameChange}> Change Name </button>
    </div>
  );
};

export default Categories;
