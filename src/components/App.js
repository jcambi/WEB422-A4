/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
of this
* assignment has been copied manually or electronically from any other source (including web sites)
or
* distributed to other students.
*
* Name: John Angelo Cambi Student ID: 110671153 Date: June 2, 2019
*
********************************************************************************/

import React, { Component } from "react";
import Overview from "./Overview";
import Projects from "./Projects";
import Teams from "./Teams";
import Employees from "./Employees";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route exact path="/WEB422-A4" component={Overview} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/employees" component={Employees} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
