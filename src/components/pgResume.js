import React, { Component } from 'react'
import PDFResume from './Helpers/pdfResume'

const PDFViewStyle = {

  width: '100%',

  justifyContent: 'center',
  textAlign: 'center'

}

export default class Resume extends Component {
  render() {
    return (
      <div style={PDFViewStyle}>
        <PDFResume/>  
      </div>
    )
  }
}

