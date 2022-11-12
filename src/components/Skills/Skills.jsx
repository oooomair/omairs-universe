import React from 'react'
import './skills.scss'
import { html, css, js, sass, react, figma, ts, nodejs, expressjs, mongodb, postgres, git, nextjs } from '../../const/index'

const Skills = () => {
  return (
    <div className='skills'>
        <h1>My Tech Stack</h1>
        <div className="skills__technologies">
            <div className="skills__tech">
                <img src={html} alt="html" />
                <span>HTML</span>
            </div>
            <div className="skills__tech">
                <img src={css} alt="css" />
                <span>CSS</span>
            </div>
            <div className="skills__tech">
                <img src={js} alt="js" />
                <span>JavaScript</span>
            </div>
            <div className="skills__tech">
                <img src={sass} alt="sass" />
                <span>Sass</span>
            </div>
            <div className="skills__tech">
                <img src={react} alt="react" />
                <span>React</span>
            </div>
            <div className="skills__tech">
                <img src={nextjs} alt="react" />
                <span>NextJs</span>
            </div>
            <div className="skills__tech">
                <img src={ts} alt="ts" />
                <span>TypeScript</span>
            </div>
            <div className="skills__tech">
                <img src={nodejs} alt="nodejs" />
                <span>NodeJs</span>
            </div>
            <div className="skills__tech">
                <img src={expressjs} alt="expressjs" />
                <span>Express</span>
            </div>
            <div className="skills__tech">
                <img src={mongodb} alt="mongodb" />
                <span>MongoDB</span>
            </div>
            <div className="skills__tech">
            <img src={postgres} alt="postgres" />
                <span>PostgreSql</span>
            </div>
            <div className="skills__tech">
                <img src={git} alt="git" />
                <span>GIT</span>
            </div>
            <div className="skills__tech">
                <img src={figma} alt="figma" />
                <span>Figma</span>
            </div>
        </div>
    </div>
  )
}

export default Skills