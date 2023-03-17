// Dependancies
import React, { Component } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

// Web pages
import Home from './components/pgHome';
import Portfolio from './components/pgPortfolio';
import Resume from './components/pgResume';
import About from './components/pgAbout';
import Contact from './components/pgContact';

// Error pages
import NotFound from './components/pgNotFound';

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </AnimatePresence>
  );
};

export default Router

/*
// Route pages
export default class Router extends Component {
  render() {
    const location = useLocation();

    return (
      <AnimatePresence>
        <Routes location={window.location} key={window.location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AnimatePresence>
    )
  }
}
*/