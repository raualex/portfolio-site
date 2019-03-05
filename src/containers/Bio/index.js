import React, { Component } from 'react';
import './Bio.css';
import { connect } from 'react-redux';
import { selectProject, selectNavBtn } from '../../actions/selection-actions';

export class Bio extends Component {

  componentDidMount() {
    let { selectedNav, setSelectedNav, setSelectedProj } = this.props

    if (selectedNav === 'Bio') {
      return
    } else {
      setSelectedNav('Bio')
      setSelectedProj('')
    }
  }

  render() {
    return(
      <div className='bio-container'>
        <h1>My Bio!</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Bio);