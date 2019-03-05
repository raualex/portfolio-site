import React, { Component } from 'react';
import './Contact.css';
import pdf from '../../utils/assets/Alexander-Rau-Resume.pdf';
import resume from '../../utils/assets/icons/004-resume.svg';
import github from '../../utils/assets/icons/002-github.svg';
import linkedin from '../../utils/assets/icons/linkedin-sign.svg';
import email from '../../utils/assets/icons/003-close-envelope.svg';
import { connect } from 'react-redux';
import { selectNavBtn } from '../../actions/selection-actions';

export class Contact extends Component {
  
  componentDidMount() {
    let { selectedNav, setSelectedNav } = this.props

    if (selectedNav === 'Contact') {
      return
    } else {
      setSelectedNav('Contact')
    }
  }

  render() {
    return(
      <div className='contact-container'>
        <h1>Contact Info</h1>
        <div className='contact-links'>
          <div className='link-container'>
            <a
              href={pdf}
              target='_blank'
              rel='noopener noreferrer'
              className='resume-link'
            >Resume</a>
            <img src={resume} alt='resume icon' className='contact-icon' />
          </div>
          <div className='link-container'>
            <a 
              href='https://github.com/raualex'
              target='_blank'
              rel='noopener noreferrer'
              className='github-link'
            >GitHub</a>
            <img src={github} alt='github icon' className='contact-icon' />
          </div>
          <div className='link-container'>
            <a
              href='https://www.linkedin.com/in/alexander-rau/'
              target='_blank'
              rel='noopener noreferrer'
              className='linkedin-link'
            >LinkedIn</a>
            <img src={linkedin} alt='linked in icon' className='contact-icon' />
          </div>
          <div className='link-container'>
            <a 
              href='mailto:raualexander86@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='email-link'
            >Email</a>
            <img src={email} alt='email icon' className='contact-icon' />
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedNav: state.selectedNav
});

export const mapDispatchToProps = (dispatch) => ({
  setSelectedNav: (nav) => dispatch(selectNavBtn(nav))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
