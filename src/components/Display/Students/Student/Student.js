import React, { Component } from "react";
import Plus from "../../../../assets/Img/plus.svg";
import Minus from "../../../../assets/Img/minus.svg";

import "./Student.css";
import TagSearch from "./TagSearch/TagSearch";
import TagBox from "./TagBox/TagBox";
import samplePhoto from "../../../../assets/Img/samplephoto.jpg";

class Student extends Component {
  state = {
    open: false,
    tag: ""
  };

  changeHandler = () => {
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  };

  tagChangeHandler = event => {
    this.setState({ tag: event.target.value });
  };

  add = () => {
    const mTag = this.state.tag;
    if (mTag !== "") {
      console.log(mTag);
      this.props.addTag(this.props.id, mTag);
      this.setState({ tag: "" });
    }
  };

  render() {
    let sum = 0;

    let test = this.props.data.grades.map((t, k) => {
      sum = sum + parseInt(t);
      return (
        <React.Fragment key={k}>
          <span>
            Test {k}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t}%
          </span>
          <br />
        </React.Fragment>
      );
    });

    let sign = Minus;
    let tagS = null;
    let tagL = null;

    if (!this.state.open) {
      test = null;
      sign = Plus;
    } else {
      tagS = (
        <React.Fragment>
          <TagSearch
            value={this.state.tag}
            add={this.add}
            change={this.tagChangeHandler}
          />
        </React.Fragment>
      );
      if (this.props.tags !== undefined) {
        tagL = this.props.tags.map((t, k) => {
          return <TagBox key={k}>{t}</TagBox>;
        });
      }
    }

    let info = (
      <React.Fragment>
        <span>Email: {this.props.data.email}</span>
        <br />
        <span>Comapany: {this.props.data.company}</span>
        <br />
        <span>Skill: {this.props.data.skill}</span>
        <br />
        <span>Average: {sum / this.props.data.grades.length}%</span>
      </React.Fragment>
    );

    return (
      <div className="Student">
        <div className="cl">
          <img className="simg" src={samplePhoto} alt="profile" />
        </div>
        <div className="cm">
          <h2>{this.props.data.firstName + " " + this.props.data.lastName}</h2>
          <p>
            {info}
            <br />
            <br />
            {test}
          </p>
          {tagL}
          <br />
          {tagS}
        </div>
        <div className="cr">
          <img
            className="sbut"
            src={sign}
            alt="display"
            onClick={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}

export default Student;
