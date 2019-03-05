import React, { Component } from 'react';
import './Bio.css';
import { connect } from 'react-redux';
import { selectNavBtn } from '../../actions/selection-actions';

export class Bio extends Component {

  componentDidMount() {
    let { selectedNav, setSelectedNav } = this.props

    if (selectedNav === 'Bio') {
      return
    } else {
      setSelectedNav('Bio')
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
  setSelectedNav: (nav) => dispatch(selectNavBtn(nav))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bio);