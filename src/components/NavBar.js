import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { Menu } from 'antd';


const MenuStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
};



export default class Navbar extends Component {
  render() {
    return (
        <>
            <Menu style={MenuStyle} theme="dark" mode="horizontal">
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/portfolio">Portfolio</Link></Menu.Item>
            </Menu> 
            
        </>
    )
  }
}