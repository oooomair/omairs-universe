import React from 'react'
import './about.scss'
import { me } from '../../const/index';


const About = () => {
  return (
    <div className='about'>
        <h1>A Little About Me</h1>
        <div className="about__main">
            <div className="about__para">
            <p>I am a Full Stack web developer based in Dubai, I use React to make Frontends with beautifully crafted dynamic UI/UX. and use Node and Express to make a complex and effective backends.</p>
            <p>Open-minded person with a passion for learning new technologies and contributing to the tech community, Problem-solver who writes simple and clean human code.</p>
            <p>I am currently very intrested in the web 3 movement working to be a part of it learn and share the new things that are to be discovered.</p>
            </div>
            <img src={me} alt="me" />
        </div>
    </div>
  )
}

export default About