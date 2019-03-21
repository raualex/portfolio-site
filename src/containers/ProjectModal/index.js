import React, { Component } from 'react';
import './ProjectModal.css';
import { connect } from 'react-redux';
import { selectProject } from '../../actions/selection-actions';
import projectPics from '../../utils/assets/data/ModalPics.js';
import ProjectInfo from '../../utils/assets/data/ProjectInfo.js';

export class ProjectModal extends Component {

  resetProject = () => {
    let { setSelectedProj } = this.props
    setSelectedProj('')
  }

  render() {
    let { selectedProj } = this.props

    return (
      <div className='project-modal-outer'>
        <div className='project-modal-container'>
          <div className='modal-heading'>
            <div className='title-container'>
              <h1>{selectedProj}</h1>
            </div>
            <button 
              className='exit-btn'
              onClick={this.resetProject}
            >X</button>
          </div>
          <img 
            src={`${projectPics[selectedProj]}`} 
            alt='screenshot of project'
            className='modal-screenshot' 
          />
          <div className='project-details-container'>
            <p><span className='modal-detail-header'>Tech Stack: </span>{ProjectInfo[selectedProj].techStack}</p>
            <p><span className='modal-detail-header'>Testing: </span>{ProjectInfo[selectedProj].testing}</p>
            <a 
              href={ProjectInfo[selectedProj].githubLink}
              target='_blank'
              rel='noopener noreferrer'
            >See the code on GitHub!</a>
            <p>{ProjectInfo[selectedProj].synopsis}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);