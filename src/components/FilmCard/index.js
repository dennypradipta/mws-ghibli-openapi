import React from "react";
import { Component } from "react";

import Card from "react-bulma-components/lib/components/card";
import Media from "react-bulma-components/lib/components/media";
import Image from "react-bulma-components/lib/components/image";
import Heading from "react-bulma-components/lib/components/heading";
import Content from "react-bulma-components/lib/components/content";

import Columns from "react-bulma-components/lib/components/columns";

export default class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    console.log(this.state);
  }

  render() {
    return (
      <Columns.Column size={4}>
        <Card className="margin-md">
          <Card.Content>
            <Media>
              <Media.Item>
                <Heading
                  className="has-text-centered padding-bottom-lg"
                  size={4}
                >
                  {this.state.data.title}
                </Heading>
                <Heading subtitle size={6}>
                  {this.state.data.description}
                </Heading>
              </Media.Item>
            </Media>
            <Content>
              <p>
                Director: {this.state.data.director}
                <br />
                Producer: {this.state.data.producer}
                <br />
                Release Date: {this.state.data.release_date}
                <br />
                RottenTomatoes Score: {this.state.data.rt_score}
              </p>
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>
    );
  }
}
