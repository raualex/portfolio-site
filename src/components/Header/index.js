import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  constructor() {
    super()
  }
  
  render() {
    return(
      <div className='header-container'>
        <h1>Alexander Rau</h1>
        <h2>Front-End Web Developer</h2>
      </div>
    )
  }
}

export default Header