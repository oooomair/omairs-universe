import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';

const Work = ({project}) => {

    const [isSelected, setIsSelected] = useState(false)

  return (
//     <CSSTransition
//     in={isSelected}
//     timeout={10000}
//     classNames="project"
//   >
    <div className="work__project" onClick={() => setIsSelected(true)}>
    <img src={project.img} alt="project" />
    <div>
      <span>{project.name}</span>
      <h6>Click to Show more</h6>
    </div>
    <h5>Click to Show more</h5>
  </div>
//   </CSSTransition>
  )
}

export default Work