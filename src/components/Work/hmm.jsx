import React, { useState } from 'react'
import './work.scss'
import { project1, project11, project2, project3 } from '../../const/index';

const Work = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='work'>
        <h1>Some of My Work</h1>
        <div className="work__projects">
          <div className="work__project">
            <img src={project11} alt="" />
            <div>
              <span>Hidden</span>
              <h6>Click to Show more</h6>
            </div>
          </div>
          <div className="work__project">
            <img src={project2} alt="" />
            <div>
              <span>O's Food Delivery</span>
              <h6>Click to Show more</h6>
            </div>
          </div>
          <div className="work__project">
            <img src={project3} alt="" />
            <div>
              <span>The Kitchen</span>
              <h6>Click to Show more</h6>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work