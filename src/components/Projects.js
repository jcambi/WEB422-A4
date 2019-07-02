import React, { Component } from "react";
import MainContainer from "./MainContainer";
var moment = require("moment");

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    fetch("https://shielded-coast-83209.herokuapp.com/projects")
      .then(res => res.json())
      .then(data => {
        this.setState({
          projects: data
        });
        console.log(this.state.projects);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <MainContainer sidebar="Projects">
        <h1 className="page-header">Projects</h1>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
            {this.state.projects.map((name, index) => {
              let mStartDate = moment(name.ProjectStartDate).format("LL");
              let mEndDate =
                name.ProjectEndDate === null
                  ? "null"
                  : moment(name.ProjectEndDate).format("LL");
              return (
                <tr key={index}>
                  <td>{name.ProjectName}</td>
                  <td>{name.ProjectDescription}</td>
                  <td>{mStartDate}</td>
                  <td>{mEndDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </MainContainer>
    );
  }
}

export default Projects;
