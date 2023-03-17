import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { Menu } from 'antd';


const MenuStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
};



export default class Navbar extends Component {
  render() {
    return (
        <div style={{margin: '0', height: '5%'}}>
            <Menu style={MenuStyle} theme="dark" mode="horizontal">
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/portfolio">Portfolio</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/resume">Resume</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/contact">Contact</Link></Menu.Item>
            </Menu> 
            
        </div>
    )
  }
}