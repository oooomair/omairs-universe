import React from 'react'
import './contact.scss'
import { github, linkedin, twitter } from '../../const/index'

const Contact = () => {

  return (
    <div className='contact' >
        <h1>Send Me A Message!</h1>
        <h1>Contact</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <div className="contact__form">
            <div className="contact__inputs-1">
                <div className="contact__input">
                    <span>Name</span>
                    <input placeholder='Omair Salam' type="text" />
                </div>
                <div className="contact__input">
                    <span>Email</span>
                    <input placeholder='letsgo@email.com' type="email" />
                </div>
            </div>
            <div className="contact__inputs-2">
                <div className="contact__input">
                    <span>Subject</span>
                    <input placeholder='Work Offer' type="text" />
                </div>
                <div className="contact__input">
                    <span>Message</span>
                    <textarea placeholder='Hi, I think we need a Full Stack Developer to build us a web app at company Z. How soon can you hop on to discuss this?'></textarea>
                </div>
            </div>
            <button> <h3>SHOOT</h3> </button>
        </div>
        <div className="contact__footer">
            <h5>© Omair Salam 2022</h5>
            <div className="contact__links">
                <img src={github} alt="logo" />
                <img src={linkedin} alt="logo" /> 
                <img src={twitter} alt="logo" /> 
            </div>
        </div>
    </div>
  )
}

export default Contact