import React from "react";

import "./TagBox.css";

const tagBox = props => {
  return (
    <React.Fragment>
      <div className="TagBox">{props.children}</div>
      <br />
    </React.Fragment>
  );
};

export default tagBox;
