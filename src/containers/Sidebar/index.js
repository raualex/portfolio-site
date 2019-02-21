import React, { Component } from 'react';
import './Sidebar.css';
import profile from '../../utils/assets/profile.jpg';

export class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='nav-bar-container'>
        <img 
          src={profile} 
          alt='Profile Picture'
          className='profile-pic' 
        />
        <ul className='nav-links'>
          <li className='nav-item active-item'>Bio</li>
          <li className='nav-item'>Skills</li>
          <li className='nav-item'>Projects</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;