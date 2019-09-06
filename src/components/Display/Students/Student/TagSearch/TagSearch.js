import React from "react";

import "./TagSearch.css";

const tagSearch = props => {
  return (
    <React.Fragment>
      <input
        type="text"
        className="TagSearch"
        placeholder="Add a tag"
        value={props.value}
        onChange={props.change}
      />
      <button className="TagSearchBut" onClick={props.add}>
        ADD
      </button>
    </React.Fragment>
  );
};

export default tagSearch;
