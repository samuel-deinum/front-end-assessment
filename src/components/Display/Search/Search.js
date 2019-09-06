import React from "react";

import "./Search.css";

const search = props => {
  return (
    <input
      type="text"
      className="Search"
      placeholder={props.type}
      onChange={props.change}
      value={props.value}
    />
  );
};

export default search;
