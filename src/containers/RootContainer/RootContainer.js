import React, { Component } from "react";
import { Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import HomeContainer from "../HomeContainer/HomeContainer";
import FilmContainer from "../Film/FilmContainer/FilmContainer";
import PeopleContainer from "../People/PeopleContainer/PeopleContainer";
import LocationContainer from "../LocationContainer/LocationContainer";
import SpeciesContainer from "../SpeciesContainer/SpeciesContainer";
import VehiclesContainer from "../VehiclesContainer/VehiclesContainer";
import NotFoundContainer from "../NotFoundContainer/NotFoundContainer";

import FilmDetailsContainer from "../Film/FilmDetailsContainer/FilmDetailsContainer";
import PeopleDetailsContainer from "../People/PeopleDetailsContainer/PeopleDetailsContainer";

import Container from "react-bulma-components/lib/components/container";

export default class RootContainer extends Component {
  render() {
    return (
      <div>
        <Router>
          <Container fluid={true}>
            <NavigationBar />
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="route-wrapper"
            >
              <Route exact path="/" render={() => <HomeContainer />} />
              <Route path="/films" render={() => <FilmContainer />} />
              <Route path="/peoples" render={() => <PeopleContainer />} />
              <Route path="/locations" render={() => <LocationContainer />} />
              <Route path="/species" render={() => <SpeciesContainer />} />
              <Route path="/vehicles" render={() => <VehiclesContainer />} />

              <Route
                path={"/film/:id"}
                render={props => <FilmDetailsContainer data={props.match} />}
              />
              <Route
                path={"/people/:id"}
                render={props => <PeopleDetailsContainer data={props.match} />}
              />
              <Route render={() => <NotFoundContainer />} />
            </AnimatedSwitch>
          </Container>
        </Router>
      </div>
    );
  }
}
