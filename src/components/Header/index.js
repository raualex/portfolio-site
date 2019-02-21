import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  constructor() {
    super()
  }
  
  render() {
    return(
      <div className='header-container'>
        <h1 className='name-title'>A l e x a n d e r<span className='last-name-title'>R a u</span></h1>
        <h2 className='job-title'>Front-End Web Developer</h2>
      </div>
    )
  }
}

export default Header