import {useEffect, useState} from 'react'
import './home.scss'
import { scroller } from "react-scroll";
import { resume } from '../../const/index'

const Home = () => {

  const scrollToSection = divCss => {
    scroller.scrollTo(divCss, {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  const [width, setWidth] = useState('')

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div className='home'>
      <div className="home__logo">
      <span>OMAIR SALAM</span>
      </div>
        <div className="home__title">
        <h1>A Full Stack Developer</h1>
        <p>that strives to create beautiful, functional and responsive web products with great user experience</p>
          {width > 900 ? <button onClick={() => {
            scrollToSection('about')
          }}>\/</button>
              :
          <button onClick={() => window.open(resume, '_blank')}>My Resume</button>}
        </div>
    </div>
  )
}

export default Home