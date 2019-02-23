import React, { Component } from 'react';
import './Bio.css';

export class Bio extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className='bio-container'>
        <h1>My Bio!</h1>
      </div>
    )
  }
}

export default Bio;