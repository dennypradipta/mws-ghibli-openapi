import React from "react";
import { Component } from "react";

import Card from "react-bulma-components/lib/components/card";
import Media from "react-bulma-components/lib/components/media";
import Image from "react-bulma-components/lib/components/image";
import Heading from "react-bulma-components/lib/components/heading";
import Content from "react-bulma-components/lib/components/content";
import Button from "react-bulma-components/lib/components/button";
import Columns from "react-bulma-components/lib/components/columns";

export default class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <Columns.Column size={4}>
        <Card className="margin-md">
          <Card.Content>
            <Media>
              <Media.Item>
                <Image src="../../images/films.svg" className="is-full-image" />
              </Media.Item>
            </Media>
            <Content className="has-text-centered">
              <Heading size={5}>{this.state.data.title}</Heading>
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
