import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import HomeContainer from "../HomeContainer/HomeContainer";
import FilmContainer from "../FilmContainer/FilmContainer";
import PeopleContainer from "../PeopleContainer/PeopleContainer";
import LocationContainer from "../LocationContainer/LocationContainer";

import Container from "react-bulma-components/lib/components/container";

export default class RootContainer extends Component {
  render() {
    return (
      <div>
        <Router>
          <Container fluid={true}>
            <NavigationBar />
            <Switch>
              <Route exact path="/" render={() => <HomeContainer />} />
              <Route path="/films" render={() => <FilmContainer />} />
              <Route path="/peoples" render={() => <PeopleContainer />} />
              <Route path="/locations" render={() => <LocationContainer />} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}
