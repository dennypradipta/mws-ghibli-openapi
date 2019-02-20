import React from "react";
import NavigationBar from "../../components/NavigationBar";
import { Route, Switch } from "react-router-dom";

import HomeContainer from "../HomeContainer";
import FilmContainer from "../FilmContainer";

import Container from "react-bulma-components/lib/components/container";

const RootContainer = () => {
  return (
    <div>
      <Container fluid={true}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />} />
          <Route path="/films" render={() => <FilmContainer />} />
        </Switch>
      </Container>
    </div>
  );
};

export default RootContainer;
