import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar';

import Home from './components/pgHome';
import Portfolio from './components/pgPortfolio';
import Resume from './components/pgResume';
import About from './components/pgAbout';
import Contact from './components/pgContact';

import NotFound from './components/pgNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar/>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
