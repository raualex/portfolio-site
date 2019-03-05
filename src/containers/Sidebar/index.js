import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectNavBtn } from '../../actions/selection-actions';
import './Sidebar.css';
import profile from '../../utils/assets/profile.jpg';

export class Sidebar extends Component {

  setNav = (event) => {
    let { setSelectedNav, selectedProj } = this.props
    let { innerHTML } = event.target
    
    if (selectedProj === '') {
      setSelectedNav(innerHTML)
    } else {
      event.preventDefault()
    }
  }

  render() {
    let { selectedNav, selectedProj } = this.props
    
    return(
      <div className={selectedProj === '' ? 'nav-bar-container' : 'nav-bar-container blur'}>
        <img 
          src={profile} 
          alt='Profile'
          className='profile-pic' 
        />
        <div className='nav-links'>
          <NavLink to='/bio'
            className={selectedNav === 'Bio' ? 'nav-item active-item ' : 'nav-item inactive-item'}
            onClick={this.setNav}
          >
            Bio
          </NavLink>
          <NavLink to='/skills'
            className={selectedNav === 'Skills' ? 'nav-item active-item ' : 'nav-item inactive-item'}
            onClick={this.setNav}
          >
            Skills
          </NavLink>
          <NavLink to='/projects'
            className={selectedNav === 'Projects' ? 'nav-item active-item ' : 'nav-item inactive-item'}
            onClick={this.setNav}
          >
            Projects
          </NavLink>
          <NavLink to='/contact'
            className={selectedNav === 'Contact' ? 'nav-item active-item ' : 'nav-item inactive-item'}
            onClick={this.setNav}
          >
            Contact
          </NavLink>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedNav: state.selectedNav,
  selectedProj: state.selectedProj
});

export const mapDispatchToProps = (dispatch) => ({
  setSelectedNav: (selectedItem) => dispatch(selectNavBtn(selectedItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);