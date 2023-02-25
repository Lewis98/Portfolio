import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Card } from 'antd';
import { GoMarkGithub } from "react-icons/go";

const { Meta } = Card;

const contStyle ={
  width: '20vw',

  minWidth: '200px',
  paddingTop: '5vh',

  margin: 'auto',

  color: 'black',
  textDecoration: 'none'
}

const cardStyle = {
}

const imageStyle = {
  height: '20vh',
  width:'100%'
}

export default class ItemCard extends Component {

  render() {
    return (
      <Link to={this.props.gitLink} style={contStyle}>
        <Card style={cardStyle} hoverable
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
      </Link>
    )
  }
}
