import React, { Component } from 'react'

const overlayStyle = {
    width: '70%',
    height: '30%',
    margin: '0 auto',
    background: 'rgba(0, 0, 0, .6)',
    borderRadius: '10px',
    padding: '30px',
    marginTop: '10vh',
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
