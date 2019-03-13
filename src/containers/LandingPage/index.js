import React, { Component } from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';
import react from '../../utils/assets/logos/react-logo.png';
import reactrouter from '../../utils/assets/logos/react-router-logo.png';
import redux from '../../utils/assets/logos/redux-logo.png';
import css from '../../utils/assets/logos/css3_logo.svg';
import enzymejest from '../../utils/assets/logos/enzyme-jest.png';
import travis from '../../utils/assets/logos/travisCI-logo.png';
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
        <h1>Welcome to my Portfolio Site!</h1>
        <p>Feel free to explore and check out my projects!</p>
        <a
          href='https://github.com/raualex/portfolio-site'
          target='_blank'
          rel='noopener noreferrer'
          className='portfolio-github-link'
        >Click here to see the code for this site!</a>
        <p>This site was built using:</p>
        <div className='landing-logo-container'>
          <img src={react} alt='react logo' className='landing-logos-react' />
          <img src={reactrouter} alt='react router logo' className='landing-logos-react-router' />
          <img src={redux} alt='redux logo' className='landing-logos-redux' />
          <img src={css} alt='css logo' className='landing-logos-css' />
        </div>
        <p>This site was tested using:</p>
        <div className='testing-logo-container'>
          <img src={enzymejest} alt='enzyme and jest logos' className='testing-logos' />
          <img src={travis} alt='travis ci logo' className='testing-logos' />
        </div>
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