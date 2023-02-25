import React, { Component } from 'react';
import ItemCard from './cPortfolioItem';

const tableStyle = {
  display: 'flex',
  flex: '1',
  flexWrap: 'wrap',
  overflowY:'auto',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',

  height: '100%',
  width: '100%',
  textAlign: 'center',
  marginTop: '10vh',
}

export default class Portfolio extends Component {
  render() {
    return (
      <div style={tableStyle}>
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
        
               
      </div>
    )
  }
}
