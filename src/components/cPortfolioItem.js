import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Card } from 'antd';
import { GoMarkGithub } from "react-icons/go";

const { Meta } = Card;


const contStyle = {
  height: '60vh'
}

const cardStyle = {
  maxWidth: '50%',
  width: '300px',
  //height: '40vh',
  
  margin: 'auto',
  marginTop: '10vh',
}

const imageStyle = {
  height: '20vh',
  width:'100%'
}

export default class ItemCard extends Component {

  render() {
    //<Link to={this.props.gitLink} style={contStyle}>
    return (
      <div style={contStyle}>
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
      </div>
    )
  }
}
