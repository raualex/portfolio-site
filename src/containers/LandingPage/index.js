import React, { Component } from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';
import { selectNavBtn } from '../../actions/selection-actions';

export class LandingPage extends Component {


  componentDidMount() {
    let { selectedNav, setSelectedNav } = this.props

    if ( selectedNav === '' ) {
      return
    } else {
      setSelectedNav('')
    }
  }

  render() {
    return(
      <div>
        <h1>Landing Page!</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);