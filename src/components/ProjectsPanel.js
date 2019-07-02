import React, { Component } from "react";
import { Link } from "react-router-dom";
var moment = require("moment");

class ProjectsPanel extends Component {
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
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.projects.map((name, index) => {
                  let mStartDate = moment(name.ProjectStartDate);
                  let mToday = moment(new Date());
                  let mDiff = mToday.diff(mStartDate, "days");
                  return (
                    <tr key={index}>
                      <td>{name.ProjectName}</td>
                      <td>{mDiff} days active</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="/projects" className="btn btn-primary form-control">
            View All Project Data
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectsPanel;
