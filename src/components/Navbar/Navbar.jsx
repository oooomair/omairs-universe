import './navbar.scss'
import { CSSTransition } from 'react-transition-group';

const Navbar = ({burger, toggleBurger}) => {

    const onBurgerChange = () => {
        toggleBurger()
    }

  return (
    <>
        <div class="navbar__burger" onClick={onBurgerChange} className={`${burger && 'navbar__active'  } navbar__burger `}>
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
            <span onClick={onBurgerChange}>Work</span>
            <span onClick={onBurgerChange}>About</span>
            <span onClick={onBurgerChange}>Skills</span>
            <span onClick={onBurgerChange}>Resume</span>
            <span className='navbar__highlight' onClick={onBurgerChange}>Contact</span>
            <div className="navbar__links">
              <span onClick={onBurgerChange}>LN</span>
              <span onClick={onBurgerChange}>GH</span>
              <span onClick={onBurgerChange}>TW</span>
            </div>
          </div>
        </CSSTransition>
    </>
  )
}

export default Navbar