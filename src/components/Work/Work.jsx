// import React, { useState } from 'react'
// import './work.scss'
// import { project1, project11, project2, project3 } from '../../const/index';

// const Work = () => {

//   const [isOpen, setIsOpen] = useState(false)
  
//   return (
//     <div className='work'>
//         <h1>Some of My Work</h1>
//         <div className="work__projects">
//           <div className="work__project">
//             <img src={project11} alt="" />
//             <div>
//               <span>Hidden</span>
//               <h6>Click to Show more</h6>
//             </div>
//           </div>
//           <div className="work__project">
//             <img src={project2} alt="" />
//             <div>
//               <span>O's Food Delivery</span>
//               <h6>Click to Show more</h6>
//             </div>
//           </div>
//           <div className="work__project">
//             <img src={project3} alt="" />
//             <div>
//               <span>The Kitchen</span>
//               <h6>Click to Show more</h6>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Work




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