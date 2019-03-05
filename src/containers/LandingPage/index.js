import React, { Component } from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';
import { selectProject, selectNavBtn } from '../../actions/selection-actions';

export class LandingPage extends Component {


  componentDidMount() {
    let { selectedNav, setSelectedNav, setSelectedProj } = this.props

    if ( selectedNav === '' ) {
      return
    } else {
      setSelectedNav('')
      setSelectedProj('')
    }
  }

  render() {
    return(
      <div className='lp-container'>
        <h1>Landing Page!</h1>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedNav: state.selectedNav
});

export const mapDispatchToProps = (dispatch) => ({
  setSelectedProj: (proj) => dispatch(selectProject(proj)),
  setSelectedNav: (nav) => dispatch(selectNavBtn(nav))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);