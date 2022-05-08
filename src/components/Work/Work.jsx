// import React, { useState } from 'react'
// import { CSSTransition } from 'react-transition-group';

// const Work = ({project}) => {

//     const [isSelected, setIsSelected] = useState(false)

//   return (
// //     <CSSTransition
// //     in={isSelected}
// //     timeout={10000}
// //     classNames="project"
// //   >
//     <div className="work__project" onClick={() => setIsSelected(true)}>
//     <img src={project.img} alt="project" />
//     <div>
//       <span>{project.name}</span>
//       <h6>Click to Show more</h6>
//     </div>
//     <h5>Click to Show more</h5>
//   </div>
// //   </CSSTransition>
//   )
// }

// export default Work

import { github, link } from '../../const/index'

const Work = ({project}) => {

  return (
    <>
    <div className="work__project" >
    <img src={project.img} alt="project" />
    <div className='work__info'>
      <span>{project.name}</span>
      <h3>{project.desc}</h3>
      <div className="work__links">
        <img onClick={() => window.open(project.website, '_blank')} src={link} alt="logo" />
        <img onClick={() => window.open(project.github, '_blank')} src={github} alt="logo" />
      </div>
    </div>
  </div>
    <div className="work__project-res" >
      <h2> {project.name} </h2>
      <img src={project.img} alt="project" />
        <h3>{project.desc}</h3>
        <div className="work__links">
          <img onClick={() => window.open(project.website, '_blank')} src={link} alt="logo" />
          <img onClick={() => window.open(project.github, '_blank')} src={github} alt="logo" />
      </div>
    </div>
    </>
  )
}

export default Work