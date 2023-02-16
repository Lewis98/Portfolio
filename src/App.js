import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar';

import Home from './components/pgHome';
import Portfolio from './components/pgPortfolio';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar/>
        </header>

        <img class='glboal-background' src='img/back1.jpg'/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
