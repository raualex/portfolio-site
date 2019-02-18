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
        <p>Navigation!</p>
      </div>
    )
  }
}

export default Sidebar;