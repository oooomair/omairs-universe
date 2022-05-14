import './navbar.scss'
import { CSSTransition } from 'react-transition-group';
import { scroller } from "react-scroll";
import { resume, musicW, musicB, spaceMusic } from '../../const/index'
import { useEffect, useRef, useState } from 'react';

const Navbar = ({burger, toggleBurger}) => {

  const myRef = useRef()

    const onBurgerChange = () => {
        toggleBurger()
    }

    const [music, setMusic] = useState(false)

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })

    const [width, setWidth] = useState('')

    const scrollToSection = divCss => {
      scroller.scrollTo(divCss, {
        duration: 200,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }

    const onMusic = () => {
        if (!music) {
          myRef.current.play()
          console.log('no')
        } else {
          myRef.current.pause()
          console.log('yes')
        }
    }

    useEffect(() => {
      setWidth(window.innerWidth)
    }, [])

  return (
        <>
          {width > 900 && <>
            <div onClick={() => {onBurgerChange(); console.log(window.innerWidth)}} className={`${burger && 'navbar__active'  } navbar__burger `}>
                <span></span>
                <span></span> 
                <span></span>
            </div>
            <CSSTransition
              in={burger}
              timeout={400}
              classNames="nav"
              unmountOnExit
            >
              <div className='navbar__list'>
                <span onClick={() => {
                  onBurgerChange()
                  scrollToSection('about')
                  }}>About</span>
                <span onClick={() => {
                  onBurgerChange()
                  scrollToSection('skills')
                  }}>Skills</span>
                <span onClick={() => {
                  onBurgerChange()
                  scrollToSection('work')
                  }}>Work</span>
                <span onClick={() => {
                  onBurgerChange()
                  window.open(resume, '_blank')
                  }}>Resume</span>
                <span className='navbar__highlight' onClick={() => {
                  onBurgerChange()
                  scrollToSection('contact')
                  }}>Contact</span>
                <div className="navbar__links">
                  <span onClick={() => {
                  onBurgerChange()
                  window.open('https://www.linkedin.com/in/omair-salam-332304220/', '_blank')
                  }}>LN</span>
                  <span onClick={() => {
                  onBurgerChange()
                  window.open('https://github.com/oooomair', '_blank')
                  }}>GH</span>
                  <span onClick={() => {
                  onBurgerChange()
                  window.open('https://twitter.com/Oooomairi', '_blank')
                  }}>TW</span>
                </div>
              </div>
            </CSSTransition>
          </>}
          <div onClick={() => {setMusic(!music); onMusic()} } className={`navbar__music ${music && 'navbar__music-active'}`} >
            <img src={music ? musicB : musicW} alt="music-logo" />
          </div>
          <audio src={spaceMusic} ref={myRef}>
              Your browser does not support the
              <code>audio</code> element.
          </audio>
    </>

  )}

export default Navbar