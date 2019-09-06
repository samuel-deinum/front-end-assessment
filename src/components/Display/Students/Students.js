import React, { Component } from "react";
import axios from "axios";

import "./Students.css";
import Student from "./Student/Student";
import sampleResults from "./sampleResults";
class Students extends Component {
  state = {
    students: sampleResults.students,
    tags: {}
  };

  componentDidMount() {
    //his.loadData();    To Protect the Identity of the recruitment company, this version avoids loading data from their api
  }

  loadData() {
    axios
      .get("NOT AVAILABLE TO PROTECT IDENTITY OF RECRUITMENT COMPANY")
      .then(response => {
        this.setState({ students: [...response.data.students] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addTagHandler = (key, value) => {
    let mTags = { ...this.state.tags };
    if (key in mTags) {
      mTags[key].push(value);
    } else {
      mTags[key] = [value];
    }

    this.setState({ tags: mTags });
  };

  render() {
    const student = this.state.students.map((s, k) => {
      let mTags = [];
      if (s.id in this.state.tags) {
        mTags = [...this.state.tags[s.id]];
      }

      if (this.props.nameSearch !== "" || this.props.tagSearch !== "") {
        //ONLY NAME SEARCH
        if (this.props.tagSearch === "") {
          if (
            s.firstName
              .toLowerCase()
              .includes(this.props.nameSearch.toLowerCase()) ||
            s.lastName
              .toLowerCase()
              .includes(this.props.nameSearch.toLowerCase())
          ) {
            return (
              <Student
                key={k}
                data={s}
                tags={mTags}
                addTag={this.addTagHandler}
                id={s.id}
              />
            );
          } else {
            return null;
          }
          //ONLY TAG SEARCH
        } else if (this.props.nameSearch === "") {
          let found = false;
          for (let i = 0; i < mTags.length; i++) {
            found = mTags[i]
              .toLowerCase()
              .includes(this.props.tagSearch.toLowerCase());
            if (found) {
              break;
            }
          }
          if (found) {
            return (
              <Student
                key={k}
                data={s}
                tags={mTags}
                addTag={this.addTagHandler}
                id={s.id}
              />
            );
          } else {
            return null;
          }
          //BOTH TAG AND NAME SEARCH
        } else {
          let tag = false;
          let name = false;

          if (
            s.firstName
              .toLowerCase()
              .includes(this.props.nameSearch.toLowerCase()) ||
            s.lastName
              .toLowerCase()
              .includes(this.props.nameSearch.toLowerCase())
          ) {
            name = true;
          }

          for (let i = 0; i < mTags.length; i++) {
            tag = mTags[i]
              .toLowerCase()
              .includes(this.props.tagSearch.toLowerCase());
            if (tag) {
              break;
            }
          }

          if (name && tag) {
            return (
              <Student
                key={k}
                data={s}
                tags={mTags}
                addTag={this.addTagHandler}
                id={s.id}
              />
            );
          } else {
            return null;
          }
        }
        //NO FILTER
      } else {
        return (
          <Student
            key={k}
            data={s}
            tags={mTags}
            addTag={this.addTagHandler}
            id={s.id}
          />
        );
      }
    });

    return <div className="Students">{student}</div>;
  }
}

export default Students;
