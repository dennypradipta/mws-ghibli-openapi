import React from "react";
import { Component } from "react";

import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";
import Loader from "react-bulma-components/lib/components/loader";

import VehicleCard from "../../components/VehicleCard/VehicleCard";

export default class VehiclesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      isLoading: true
    };
  }

  componentWillMount() {
    let currentComponent = this;
    fetch("https://ghibliapi.herokuapp.com/vehicles").then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        currentComponent.setState({
          vehicles: data,
          isLoading: false
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>List of Vehicles</h1>
          <hr />
          {this.state.isLoading ? (
            <Loader
              className="has-text-centered"
              style={{
                width: 300,
                height: 300,
                border: "4px solid #00E2B3",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                margin: "0 auto",
                marginTop: "4rem"
              }}
            />
          ) : (
            <Columns gapless>
              {this.state.vehicles.map(vehicle => {
                return <VehicleCard data={vehicle} key={vehicle.id} />;
              })}
            </Columns>
          )}
        </Container>
      </div>
    );
  }
}
