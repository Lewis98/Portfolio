import React, { Component } from 'react';
import ItemCard from './cPortfolioItem';

import {Col, Row} from 'antd'

const tableStyle = {
  margin: '3vh'
}
export default class Portfolio extends Component {
  render() {
    return (
      <div style={tableStyle}>
        <Row gutter={16}>
        <Col span={8}>
            <ItemCard 
              image="/img/projects/portfolio.jpg"
              title="React Portfolio"
              description="This current website, build in react, and used as a showcase for hobby projects"
              gitLink="https://github.com/Lewis98/Portfolio"
            /> 
          </Col>
          <Col span={8}>
            <ItemCard 
              image="/img/projects/conwayGoL.gif"
              title="Conways Game of Life"
              description="Simulation of Conways 'Game of Life' using C++ and SFML"
              gitLink="https://github.com/Lewis98/Game_of_Life"
            /> 
          </Col>
          <Col span={8}>
            <ItemCard 
              image="/img/projects/6003CEM.png"
              title="Example backend NodeJS API"
              description="Backend API university project for license applications"
              gitLink="https://github.com/Lewis98/6003CEM_CWK2_BE"
            /> 
          </Col>
        </Row>
               
      </div>
    )
  }
}
