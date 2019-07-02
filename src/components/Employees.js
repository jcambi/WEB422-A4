import React, { Component } from "react";
import MainContainer from "./MainContainer";
var moment = require("moment");

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    fetch("https://shielded-coast-83209.herokuapp.com/employees")
      .then(res => res.json())
      .then(data => {
        this.setState({
          employees: data
        });
        console.log(this.state.employees);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <MainContainer sidebar="Employees">
        <h1 className="page-header">Employees</h1>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <th>Name & Position</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Hire Date</th>
              <th>Salary Bonus</th>
            </tr>
            {this.state.employees.map((name, index) => {
              let hireDate = moment(name.HireDate).format("LL");
              return (
                <tr key={index}>
                  <td>
                    {name.FirstName} {name.LastName} -{" "}
                    {name.Position.PositionName}
                  </td>
                  <td>
                    {name.AddressStreet}, {name.AddressCity},{" "}
                    {name.AddressState}, {name.AddressZip}
                  </td>
                  <td>
                    {name.PhoneNum} ext: {name.Extension}
                  </td>
                  <td>{hireDate}</td>
                  <td>$ {name.SalaryBonus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </MainContainer>
    );
  }
}

export default Employees;
