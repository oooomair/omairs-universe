import React, { useState } from 'react'
import './work.scss'
import projects from './projects'
import Work from './Work'

const Works = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='work'>
        <h1>Some of My Work</h1>
        <div className="work__projects">
            {projects.map(project => {
              return <Work key={project.id} project={project}/>
            })}
        </div>
    </div>
  )
}

export default Works