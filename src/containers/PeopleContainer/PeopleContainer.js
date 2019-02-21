import React from "react";
import { Component } from "react";

import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";
import Loader from "react-bulma-components/lib/components/loader";

import PeopleCard from "../../components/PeopleCard/PeopleCard";

export default class PeopleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      isLoading: true
    };
  }

  componentDidMount() {
    let currentComponent = this;
    fetch("https://ghibliapi.herokuapp.com/people").then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        currentComponent.setState({
          peoples: data,
          isLoading: false
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>List of People</h1>
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
              {this.state.peoples.map(people => {
                return <PeopleCard data={people} key={people.id} />;
              })}
            </Columns>
          )}
        </Container>
      </div>
    );
  }
}
