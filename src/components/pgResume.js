import React, { Component } from 'react'

import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import PgTrans from './Helpers/pageTransition';

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
      <PgTrans>
        <iframe style={iframeStyle} src='/CV - Lewis Stokes 23.02.15.pdf'/>
        <br/>
        <a href='/CV - Lewis Stokes 23.02.15.pdf' download>
        <Button type="primary" shape="round" style={btnStyle} icon={<DownloadOutlined />}>
          Download
        </Button>
        </a>
      </PgTrans>
    )
  }
}

