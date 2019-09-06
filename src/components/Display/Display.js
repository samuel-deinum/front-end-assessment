import React, { Component } from "react";
import "./Display.css";

import Search from "./Search/Search";
import Students from "./Students/Students";
class Display extends Component {
  state = {
    nameSearch: "",
    tagSearch: ""
  };

  nameChangeHandler = event => {
    this.setState({ nameSearch: event.target.value });
  };

  tagChangeHandler = event => {
    this.setState({ tagSearch: event.target.value });
  };

  render() {
    return (
      <div className="Display">
        <Search
          type="Search by name"
          value={this.state.nameSearch}
          change={this.nameChangeHandler}
        />
        <Search
          type="Search by tag"
          value={this.state.tagSearch}
          change={this.tagChangeHandler}
        />
        <Students
          nameSearch={this.state.nameSearch}
          tagSearch={this.state.tagSearch}
        />
      </div>
    );
  }
}

export default Display;
