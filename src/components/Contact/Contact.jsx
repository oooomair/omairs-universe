import React from 'react'
import './contact.scss'
import { github, linkedin, twitter } from '../../const/index'

const Contact = () => {

  return (
    <div className='contact' >
        <h1>Send me a Message!</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <div className="contact__form">
            <div className="contact__inputs-1">
                <div className="contact__input">
                    <span>Name</span>
                    <input type="text" />
                </div>
                <div className="contact__input">
                    <span>Email</span>
                    <input type="email" />
                </div>
            </div>
            <div className="contact__inputs-2">
                <div className="contact__input">
                    <span>Subject</span>
                    <input type="text" />
                </div>
                <div className="contact__input">
                    <span>Message</span>
                    <textarea rows="8"></textarea>
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