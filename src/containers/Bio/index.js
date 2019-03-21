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
        <p>Software Engineer with an aptitude for solving complex problems. 
          I love to construct complex, fully tested, UI systems based on a full 
          understanding of the User Experience. I thrive in a dynamic, collaborative 
          environment that utilizes an agile workflow to tackle challenges and accomplish 
          collective goals. Most importantly, I wish to use my skills to serve a mission-driven 
          company that helps people and communities in need.</p>
        <p>Front End languages and libraries I work with: React, Redux, 
          JavaScript/jQuery, CSS3, HTML5. I can execute asynchronous JavaScript 
          to interact with RESTful APIs, and a PostgreSQL Back End. I can also 
          build my own Back End using Node, Knex, Express and PostgreSQL. In addition, 
          I have experience using: Microsoft Office/Excel and JIRA, as well as excellent 
          organizational and communication skills, and a strong desire to make positive 
          change in the world.</p>
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