import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNavBtn } from '../../actions/selection-actions';
import './Sidebar.css';
import profile from '../../utils/assets/profile.jpg';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  setNav = (event) => {
    let { setSelectedNav } = this.props
    let { innerHTML } = event.target

    setSelectedNav(innerHTML)
  }

  render() {
    let { selectedNav } = this.props
    
    return(
      <div className='nav-bar-container'>
        <img 
          src={profile} 
          alt='Profile Picture'
          className='profile-pic' 
        />
        <ul className='nav-links'>
          <li 
            className={selectedNav === 'Bio' ? 'nav-item active-item ' : 'nav-item'}
            onClick={this.setNav}
          >Bio</li>
          <li 
            className={selectedNav === 'Skills' ? 'nav-item active-item ' : 'nav-item'}
            onClick={this.setNav}
          >Skills</li>
          <li 
            className={selectedNav === 'Projects' ? 'nav-item active-item ' : 'nav-item'}
            onClick={this.setNav}
          >Projects</li>
          <li 
            className={selectedNav === 'Contact' ? 'nav-item active-item ' : 'nav-item'}
            onClick={this.setNav}
          >Contact</li>
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedNav: state.selectedNav
});

export const mapDispatchToProps = (dispatch) => ({
  setSelectedNav: (selectedItem) => dispatch(selectNavBtn(selectedItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);