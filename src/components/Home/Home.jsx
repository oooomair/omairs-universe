import React from 'react'
import './home.scss'
import { scroller } from "react-scroll";

const Home = () => {

  const scrollToSection = divCss => {
    scroller.scrollTo(divCss, {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className='home'>
      <div className="home__logo">
      <span>OMAIR SALAM</span>
      </div>
        <div className="home__title">
        <h1>A Full Stack Developer</h1>
        <p>that strives to create beautiful, functional and responsive web products with great user experience</p>
        <button onClick={() => {
              scrollToSection('about')
              }}>\/</button>
        </div>
    </div>
  )
}

export default Home