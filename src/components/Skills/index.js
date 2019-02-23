import React, { Component } from 'react';
import './Skills.css';
import react from '../../utils/assets/react-logo.png';
import redux from '../../utils/assets/redux-logo.png';
import jshtmlcss from '../../utils/assets/javascript-html-css-logos.png';
import jquery from '../../utils/assets/jquery-logo.png';
import node from '../../utils/assets/node-logo.png';
import express from '../../utils/assets/expressjs-logo.png';
import knex from '../../utils/assets/knex-logo.png';
import postgresql from '../../utils/assets/postgresql-logo.png';
import microsoftsql from '../../utils/assets/microsoft-sql-server-logo.png';

export class Skills extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className='skills-container'>
        <div className='skills-box'>
          <div className='front-end-skills'>
            <h1>Front-End</h1>
            <img src={react} alt='react logo' className='program-logo' />
            <img src={redux} alt='redux logo' className='program-logo' />
            <img src={jshtmlcss} alt='javscript html and css logo' className='program-logo' />
            <img src={jquery} alt='j query logo' className='program-logo' />
          </div>
          <div className='back-end-skills'>
            <h1>Back-End</h1>
            <img src={node} alt='node logo' className='program-logo' />
            <img src={express} alt='express logo' className='program-logo' />
            <img src={knex} alt='knex logo' className='program-logo' />
            <img src={postgresql} alt='postgres logo' className='program-logo' />
            <img src={microsoftsql} alt='microsoft sql server logo' className='program-logo' />
          </div>
          <div className='testing-skills'>
            <h1>Testing</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;