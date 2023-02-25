// Dependancies
import React, { Component } from 'react'
import { Routes, Route} from "react-router-dom";

// Web pages
import Home from './components/pgHome';
import Portfolio from './components/pgPortfolio';
import Resume from './components/pgResume';
import About from './components/pgAbout';
import Contact from './components/pgContact';

// Error pages
import NotFound from './components/pgNotFound';



// Route pages
export default class Router extends Component {
  render() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
  }
}
