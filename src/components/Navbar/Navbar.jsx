import './navbar.scss'
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-scroll";
import { resume } from '../../const/index'

const Navbar = ({burger, toggleBurger}) => {

    const onBurgerChange = () => {
        toggleBurger()
    }

    // const scrollToSection = divCss => {
    //   scroller.scrollTo(divCss, {
    //     duration: 2000,
    //     delay: 0,
    //     smooth: "easeInOutQuart",
    //   });
    // };

  return (
    <>
        <div onClick={onBurgerChange} className={`${burger && 'navbar__active'  } navbar__burger `}>
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
            <Link to='about' smooth={true} spy={true} offset={0} duration={300}>
            <span onClick={() => {
              onBurgerChange()
              // scrollToSection('about')
              }}>About</span>
            </Link>
            <span onClick={() => {
            onBurgerChange()
              // scrollToSection('skills')
              }}>Skills</span>
            <span onClick={() => {
              onBurgerChange()
              // scrollToSection('work')
              }}>Work</span>
            <span onClick={() => {
              onBurgerChange()
              window.open(resume, '_blank')
              }}>Resume</span>
            <span className='navbar__highlight' onClick={() => {
              onBurgerChange()
              // scrollToSection('contact')
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
    </>
  )
}

export default Navbar