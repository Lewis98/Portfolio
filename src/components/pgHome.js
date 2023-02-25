import React, { Component } from 'react'

const overlayStyle = {
    /*width: '70%',
    height: '30%',
    margin: '0 auto',*/
    //background: 'rgba(0, 0, 0, .6)',
    margin: '0%',
    border: '0%',
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 1%, #141517 100%)',
    fontStyle: 'italic',
   // borderRadius: '10px',
    padding: '5vh',
    //marginTop: '10vh',
    textAlign: 'center'
}

const txtStyle = {
    color: 'white'
}

export default class pgHome extends Component {
  render() {
    return (
      <>
        <div style={overlayStyle}>

            <h1 style={txtStyle}>Lewis Stokes</h1>
            <h2 style={txtStyle}>Software Developer</h2>

        </div>
      </>
    )
  }
}
