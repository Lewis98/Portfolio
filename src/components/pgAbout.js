import React, { Component } from 'react'


const titleStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '30px',
    margin: '0'
}

const txtStyle = {
  color: 'white',
  width: '20vw',
  minWidth: '300px',
  margin: 'auto'
}

const containerStyle = {
  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6488372093023256) 50%, rgba(255,255,255,0) 100%)',
  margin: '0',

  justifyContent: 'center',
  

  height: '100%',
}

export default class About extends Component {
  render() {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>About Me</h1>

            <p style={txtStyle}>
              Began hobbyist programming from 13 in Visual Basic and C++.
              Despite lacking the option of formal education, progressed onto securing a 1st Class bachelor's degree.
              In previous job roles, I have excelled at taking ownership of legacy projects and providing sound, durable solutions to problems.
            </p>

            <h2 style={titleStyle}>Software Development</h2>

            <p style={txtStyle}>
              Currently strong commercially with NodeJS and React, with interests in Artifical Intelligence, Python and the renewable sector.
            </p>

            <h2 style={titleStyle}>Hobbies</h2>

            <p style={txtStyle}>
              I am regularly picking up new hobbies whenever possible, as I
              enjoy new challenges, and thrive off of diversifying my abilities
              and skillset. Previously over the years, I have taken up hiking,
              bouldering, sailing, snowboarding, and many other hobbies.
              Most recent of which is beginning to learn to fly, as it has been
              a long standing dream that I am finally able to attempt. I
              believe flying is a great aid in keeping my mind active, as well
              as great practice at multitasking and mental preparedness. 
            </p>
            
        </div>
    )
  }
}
