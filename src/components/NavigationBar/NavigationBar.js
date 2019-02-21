import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bulma-components/lib/components/navbar";
import Container from "react-bulma-components/lib/components/container";

const NavigationBar = () => {
  return (
    <div>
      <Container fluid={true}>
        <Navbar color="primary" fixed="top" transparent={false}>
          <Container>
            <Navbar.Brand>
              <Navbar.Item renderAs={Link} to="/">
                Denny Pradipta
              </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Container>
                <Navbar.Item renderAs={Link} to="/films">
                  Films
                </Navbar.Item>
                <Navbar.Item renderAs={Link} to="/peoples">
                  Peoples
                </Navbar.Item>
                <Navbar.Item renderAs={Link} to="/locations">
                  Locations
                </Navbar.Item>
                <Navbar.Item renderAs={Link} to="/species">
                  Species
                </Navbar.Item>
                <Navbar.Item renderAs={Link} to="/vehicles">
                  Vehicles
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
