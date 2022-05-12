import { useState } from 'react';
import './app.scss';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Works from './components/Work/Works';
import Skills from './components/Skills/Skills';
import { planet1, astraunaut } from './const/index';
import Contact from './components/Contact/Contact';

function App() {

  // const [astPos, setAstPos] = useState({
  //   left: 0,
  //   top: 0
  // })

  // let mouseX = 0;
  // let mouseY = 0;

    // document.addEventListener("mousemove", function(e){
    //   mouseX = e.clientX;
    //   mouseY = e.clientY;
    //   setAstPos({
    //     left: mouseX - 170,
    //     top: mouseY
    //   })

    // })
  

  const [burger, setBurger] = useState(false)

  const toggleBurger = () => {
    setBurger(!burger)
  }

  return (
    <div className="App">
      <Navbar burger={burger} toggleBurger={toggleBurger} />
      <div onClick={() => setBurger(false)} className="main">
        <img className='planet1' src={planet1} alt="planet" />
        <img className='astraunaut' 
        // style={{left: astPos.left, top: astPos.top}}
         src={astraunaut} alt="astraunaut" />
        <Home/>
        <About/>
        <Skills/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
