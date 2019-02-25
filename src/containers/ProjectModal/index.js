import React, { Component } from 'react';
import './ProjectModal.css';
import { connect } from 'react-redux';
import { selectProject } from '../../actions/selection-actions';

export class ProjectModal extends Component {
  // constructor() {
  //   super();
  // }

  resetProject = () => {
    let { setSelectedProj } = this.props
    setSelectedProj('')
  }

  render() {
    let { selectedProj } = this.props

    return (
      <div className='project-modal-container'>
        <h1>{selectedProj}</h1>
        <button onClick={this.resetProject}>X</button>
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