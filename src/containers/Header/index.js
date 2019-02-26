import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

export class Header extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    let { selectedProj } = this.props

    return(
      <div className={selectedProj === '' ? 'header-container' : 'header-container blur'}>
        <h1 className='name-title'>A l e x a n d e r<span className='last-name-title'>R a u</span></h1>
        <h2 className='job-title'>Front-End Web Developer</h2>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedProj: state.selectedProj
});

export default connect(mapStateToProps)(Header);
