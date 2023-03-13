import React, { Component } from 'react';
import { Carousel, Col, Row  } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import ItemCard from './cPortfolioItem';

const carouselStyle = {
  margin: '0',
  padding: '0',
  height: '50%',
}

const itemNavContainerStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around', //'center',
  marginBottom: '3em',
}

const arrowStyle = {
  color: '#a6adb4',
  backgroundColor: '#001529',
  borderRadius: '50%',
  padding: '.25em',
  fontSize: '4em',
  boxShadow: '5px 5px 8px black',
  
  "&:hover": {
    backgroundColor: "white"
  },
}

const arrowStyleRight = {

  color: '#a6adb4',
  backgroundColor: '#001529',
  borderRadius: '50%',
  padding: '.25em',
  fontSize: '4em',
  boxShadow: '5px 5px 8px black',
  
  "&:hover": {
    backgroundColor: "white"
  },

  boxShadow: '-5px 5px 8px black',
}

export default class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }


  render() {

    const props = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <>
        <Carousel style={carouselStyle} ref={node => (this.carousel = node)} {...props}>
          <ItemCard 
            image="/img/projects/MLP.jpg"
            title="Multi Layer Perceptron"
            description="Neural network project in Python from the ground up"
            gitLink="https://github.com/Lewis98/PyMLP"
          />
          
          <ItemCard 
            image="/img/projects/portfolio.jpg"
            title="React Portfolio"
            description="This current website, built in react, and used as a showcase for hobby projects"
            gitLink="https://github.com/Lewis98/Portfolio"
          />

          <ItemCard
            image="/img/projects/conwayGoL.gif"
            title="Conways Game of Life"
            description="Simulation of Conways 'Game of Life' using C++ and SFML"
            gitLink="https://github.com/Lewis98/Game_of_Life"
          /> 

          <ItemCard 
            image="/img/projects/6003CEM.png"
            title="Example backend NodeJS API"
            description="Backend API university project for license applications"
            gitLink="https://github.com/Lewis98/6003CEM_CWK2_BE"
          />     
        </Carousel>
        <div style={itemNavContainerStyle}>
          <LeftOutlined style={arrowStyle} onClick={this.previous} />
          <RightOutlined style={arrowStyleRight} onClick={this.next} /> 
        </div>    
      </>
    )
  }
}
