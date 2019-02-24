import React, { Component } from 'react';
import './Contact.css';
import pdf from '../../utils/assets/Alexander-Rau-Resume.pdf'

export class Contact extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className='contact-container'>
        <h1>Contact Info</h1>
        <div className='contact-links'>
          <a
            href={pdf}
            target='_blank'
            rel='noopener noreferrer'
          >Resume</a>
          <a 
            href='https://github.com/raualex'
            target='_blank'
            rel='noopener noreferrer'
          >GitHub</a>
          <a
            href='https://www.linkedin.com/in/alexander-rau/'
            target='_blank'
            rel='noopener noreferrer'
          >LinkedIn</a>
          <a 
            href='mailto:raualexander86@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >Email</a>        
        </div>
      </div>
    )
  }
}

export default Contact;