import React, { Component } from 'react';

import { Card } from 'antd';
import { GoMarkGithub } from "react-icons/go";

const { Meta } = Card;

const cardStyle = {
    maxWidth : '40vw',

}

const imageStyle = {
    height : '40vh'
}

export default class ItemCard extends Component {
  render() {
    return (
        <Card style={cardStyle}
        cover={
          <img style = {imageStyle}
            alt="Project image"
            src={this.props.image}
          />
        }
        actions={[
            <a href={this.props.gitLink}>
                <GoMarkGithub size={16} />
            </a>,
        ]}
      >
        <Meta
          title={this.props.title}
          description={this.props.description}

        />
      </Card>
    )
  }
}
