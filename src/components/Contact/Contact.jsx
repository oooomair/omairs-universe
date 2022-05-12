import React, { useState } from 'react'
import './contact.scss'
import { github, linkedin, twitter, arrow } from '../../const/index'
import validator from 'validator'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [isNameValid, setIsNameValid] = useState()
    const [isEmailValid, setIsEmailValid] = useState()
    const [isSubjectValid, setIsSubjectValid] = useState()
    const [isMessageValid, setIsMessageValid] = useState()

    const [sent, setSent] = useState(false)

    const checkInput = input => {
        if (input === 'name') {
            if (name.length > 0) {
                setIsNameValid(true)
            } else {
                setIsNameValid(false)
            }
        }
        if (input === 'email') {
            if (validator.isEmail(email)) {
                setIsEmailValid(true)
            } else {
                setIsEmailValid(false)
            }
        }
        if (input === 'subject') {
            if (subject.length > 0) {
                setIsSubjectValid(true)
            } else {
                setIsSubjectValid(false)
            }
        }
        if (input === 'message') {
            if (message.length > 0) {
                setIsMessageValid(true)
            } else {
                setIsMessageValid(false)
            }
        }
    }

    const sendMessage = e => {
           e.preventDefault()
            fetch('https://sheetdb.io/api/v1/fyrebezfmtjws', {
                method: 'POST',
                body: new FormData(document.getElementById('contact-form'))
            }).then(res => {
                res.json()
            }).then (res => {
                console.log(res);
            })
            setSent(true)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            setTimeout(() => {
            setSent(false)
            }, 5000);
    }

  return (
    <div className='contact' >
        <h1>Send Me A Message!</h1>
        <h1>Contact</h1>
        <p>Got a question or proposal, or just want to say hello ? Go ahead.</p>
        <form onSubmit={sendMessage} id='contact-form' className="contact__form">
            <div className="contact__inputs-1">
                <div className={`contact__input ${isNameValid ? 'correct-input' : isNameValid === false && 'wrong-input'}`}>
                    <span>Name</span>
                    <input oninvalid="this.setCustomValidity('Enter User Name Here')" oninput="this.setCustomValidity('')" name='name' required onBlur={() => checkInput('name')} onChange={e => setName(e.target.value)} value={name} placeholder='Omair Salam' type="text" />
                </div>
                <div className={`contact__input ${isEmailValid ? 'correct-input' : isEmailValid === false && 'wrong-input'}`}>
                    <span>Email</span>
                    <input name='email' required onBlur={() => checkInput('email')} onChange={e => setEmail(e.target.value)} value={email} placeholder='letsgo@email.com' type="email" />
                </div>
            </div>
            <div className="contact__inputs-2">
                <div className={`contact__input ${isSubjectValid ? 'correct-input' : isSubjectValid === false && 'wrong-input'}`}>
                    <span>Subject</span>
                    <input name='subject' required onBlur={() => checkInput('subject')} onChange={e => setSubject(e.target.value)} value={subject} placeholder='Work Offer' type="text" />
                </div>
                <div className={`contact__input ${isMessageValid ? 'correct-input' : isMessageValid === false && 'wrong-input'}`}>
                    <span>Message</span>
                    <textarea id='message-input' name='message' required onBlur={() => checkInput('message')} onChange={e => setMessage(e.target.value)} value={message} placeholder='Hi, I think we need a Full Stack Developer to build us a web app at company Z. How soon can you hop on to discuss this?'></textarea>
                </div>
            </div>
            {!sent ? <button type='submit' > <h3>SHOOT</h3> <img src={arrow} alt="arrow" /> </button> : <button type='submit' > <h3>SENT</h3> </button>}
        </form>
        <div className="contact__footer">
            <h5>© Omair Salam 2022</h5>
            <div className="contact__links">
                <img src={github} onClick={() => window.open('https://github.com/oooomair', '_blank')} alt="logo" />
                <img src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/omair-salam-332304220/', '_blank')} alt="logo" /> 
                <img src={twitter} onClick={() => window.open('https://twitter.com/Oooomairi', '_blank')} alt="logo" /> 
            </div>
        </div>
    </div>
  )
}

export default Contact