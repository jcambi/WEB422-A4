import React, { Component } from "react";
import MainContainer from "./MainContainer";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    fetch("https://shielded-coast-83209.herokuapp.com/teams")
      .then(res => res.json())
      .then(data => {
        this.setState({
          teams: data
        });
        console.log(this.state.teams);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <MainContainer sidebar="Teams">
        <h1 className="page-header">Teams</h1>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Projects</th>
              <th>Employees</th>
              <th>Team Lead</th>
            </tr>
            {this.state.teams.map((name, index) => {
              return (
                <tr key={index}>
                  <td>{name.TeamName}</td>
                  <td>
                    {Object.keys(name.Projects).map(key => {
                      return (
                        <ul key={key}>
                          <li>{name.Projects[key].ProjectName}</li>
                        </ul>
                      );
                    })}
                  </td>
                  <td>{name.Employees.length} employees</td>
                  <td>
                    {name.TeamLead.FirstName} {name.TeamLead.LastName}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </MainContainer>
    );
  }
}

export default Teams;
