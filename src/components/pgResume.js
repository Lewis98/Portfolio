import React, { Component } from 'react'

import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const iframeStyle = {
  border: 'none',
  marginTop: '3vh',
  width: '60%',
  height: '60vh',
}

const btnStyle = {
  marginTop: '3em'
}

const PDFViewStyle = {

  width: '100%',

  justifyContent: 'center',
  textAlign: 'center'

}

export default class Resume extends Component {
  render() {

    return (
      <div>
        <iframe style={iframeStyle} src='/CV.pdf'/>
        <br/>
        <a href='/CV.pdf' download>
        <Button type="primary" shape="round" style={btnStyle} icon={<DownloadOutlined />}>
          Download
        </Button>
        </a>
      </div>
    )
  }
}

