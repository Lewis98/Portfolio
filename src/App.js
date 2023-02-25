import './App.css';
import { BrowserRouter} from "react-router-dom";

import Navbar from './components/NavBar';

import Router from './Router';



function App() {
  return (
    <div className="App">
      

      <ul className="slideshow">
        <li><span>Image 01</span></li>
        <li><span>Image 02</span></li>
        <li><span>Image 03</span></li>
        <li><span>Image 04</span></li>
        <li><span>Image 05</span></li>
        <li><span>Image 06</span></li>
      </ul>


      <div className="container">
        <BrowserRouter>
          <header className="App-header">
            <Navbar/>
          </header>
          <Router/>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
