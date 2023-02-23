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

export default class NotFound extends Component {
  render() {
    return (
        <div style={overlayStyle}>

            <h1 style={txtStyle}>Error: 404 - Not Found</h1>
            <h3 style={txtStyle}>The page you're trying to access doesn't seem to exist.</h3>

        </div>  
    )
  }
}
