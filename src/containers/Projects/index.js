import React, { Component } from 'react';
import './Projects.css';
import mmatch from '../../utils/assets/screenshots/mentor-match-screenshot.png';
import bandr from '../../utils/assets/screenshots/breadandroses-screenshot.png';
import ebmdb from '../../utils/assets/screenshots/ebm-database.png';
import swapibox from '../../utils/assets/screenshots/swapibox-screenshot.png';
import gametime from '../../utils/assets/screenshots/gametime-screenshot.jpg';
import { connect } from 'react-redux';
import { selectProject } from '../../actions/selection-actions';
import ProjectModal from '../ProjectModal';

export class Projects extends Component {
  // constructor(props) {
  //   super(props);
  // }

  setProject = (project) => {
    let { setSelectedProj } = this.props
    setSelectedProj(project)
  }

  render() {
    let { selectedProj } = this.props

    return(
      <div className={selectedProj === '' ? 'projects-container' : 'projects-container blur'}>
        <div className='project-links-box'>
          <div className='projects-titles-container'>
            <h1 className='projects-title'>Recent and On-going Projects</h1>
            <h4>(Click the screenshot to see more info)</h4>
          </div>
          <div 
            className='mentormatch-container'
            onClick={() => this.setProject('Mentor Match')}
          >
            <h2>Mentor Match</h2>
            <img 
              src={mmatch}
              alt='mentor match screenshot'
              className='mm-screenshot' 
            />
          </div>
          <div 
            className='ebmdb-container'
            onClick={() => this.setProject('EBM Database')}
          >
            <h2>EBM Database (in progress)</h2>
            <img 
              src={ebmdb}
              alt='EBM Database screenshot'
              className='ebmdb-screenshot' 
            />
          </div>
          <div 
            className='bandr-container'
            onClick={() => this.setProject('Bread and Roses')}
          >
            <h2>Bread and Roses</h2>
            <img 
              src={bandr}
              alt='bread and roses screenshot'
              className='bar-screenshot' 
            />
          </div>
          <div 
            className='swapibox-container'
            onClick={() => this.setProject('SWAPIbox')}
          >
            <h2>SWAPIbox</h2>
            <img 
              src={swapibox}
              alt='swapi box screenshot'
              className='swapi-screenshot' 
            />
          </div>
          <div 
            className='gametime-container'
            onClick={() => this.setProject('Game Time - Snake')}
          >
            <h2>Game Time - Snake</h2>
            <img 
              src={gametime}
              alt='game time screenshot'
              className='gametime-screenshot' 
            />
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedProj: state.selectedProj
});

export const mapDispatchToProps = (dispatch) => ({
  setSelectedProj: (proj) => dispatch(selectProject(proj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
