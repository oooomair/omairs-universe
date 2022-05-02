import { useState } from 'react';
import './app.scss';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Works from './components/Work/Works';
// import Work from './components/Work/hmm';
import Skills from './components/Skills/Skills';
import { planet1, astraunaut } from './const/index';

function App() {

  const [burger, setBurger] = useState(false)

  const toggleBurger = () => {
    setBurger(!burger)
  }

  return (
    <div className="App">
      <Navbar burger={burger} toggleBurger={toggleBurger} />
      <div onClick={() => setBurger(false)} className="main">
        <img className='planet1' src={planet1} alt="planet" />
        <img className='astraunaut' src={astraunaut} alt="astraunaut" />
        <Home/>
        <About/>
        <Skills/>
        <Works/>
      </div>
    </div>
  );
}

export default App;
