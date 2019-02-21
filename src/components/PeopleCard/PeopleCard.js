import React from "react";
import { Component } from "react";

import Card from "react-bulma-components/lib/components/card";
import Media from "react-bulma-components/lib/components/media";
import Image from "react-bulma-components/lib/components/image";
import Heading from "react-bulma-components/lib/components/heading";
import Content from "react-bulma-components/lib/components/content";
import Button from "react-bulma-components/lib/components/button";

import Columns from "react-bulma-components/lib/components/columns";

export default class PeopleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      speciesName: ""
    };
  }

  getSpeciesById(speciesURL) {
    let currentComponent = this;
    fetch(speciesURL).then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        currentComponent.setState({
          speciesName: "Species not found!"
        });
      }
      response.json().then(function(data) {
        currentComponent.setState({
          speciesName: data.name
        });
      });
    });
  }

  componentWillMount() {
    this.getSpeciesById(this.state.data.species);
  }

  render() {
    return (
      <Columns.Column size={3}>
        <Card className="margin-md">
          <Card.Content>
            <Media>
              <Media.Item>
                <Image
                  src="../../images/people.svg"
                  className="is-rounded-image"
                  style={{ width: 128 }}
                />
              </Media.Item>
            </Media>
            <Content className="has-text-centered">
              <Heading className="has-text-centered" size={4}>
                {this.state.data.name}
              </Heading>
              <Button color="primary" outlined={false}>
                Read More
              </Button>
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>
    );
  }
}
