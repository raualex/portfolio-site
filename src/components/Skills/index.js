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
import chaimocha from '../../utils/assets/chai-mocha.png';
import enzymejest from '../../utils/assets/enzyme-jest.png';
import travis from '../../utils/assets/travisCI-logo.png';
import git from '../../utils/assets/git-logo.png';
import github from '../../utils/assets/github-logo.png';
import heroku from '../../utils/assets/heroku-logo.png';
import waffleio from '../../utils/assets/waffleio.png';
import jira from '../../utils/assets/jira-logo.png';
import ember from '../../utils/assets/ember-logo.svg';
import vue from '../../utils/assets/vue-logo.svg';
import angular from '../../utils/assets/angular-logo.svg';
import cucumber from '../../utils/assets/cucumber-logo.png';

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
            <img src={chaimocha} alt='chai and mocha logos' className='program-logo' />
            <img src={enzymejest} alt='enzyme and jest logos' className='program-logo' />
            <img src={travis} alt='Travis CI logo' className='program-logo' />
          </div>
          <div className='workflow-skills'>
            <h1>Workflow/Tools</h1>
            <img src={git} alt='git logo' className='program-logo' />
            <img src={github} alt='github logo' className='program-logo' />
            <img src={heroku} alt='heroku logo' className='program-logo' />
            <img src={waffleio} alt='waffle IO logo' className='program-logo' />
            <img src={jira} alt='jira logo' className='program-logo' />
          </div>
          <div className='currently-learning-skills'>
            <h1>Currently Learning</h1>
            <img src={ember} alt='ember logo' className='program-logo' />
            <img src={vue} alt='vue logo' className='program-logo' />
            <img src={angular} alt='angular logo' className='program-logo' />
            <img src={cucumber} alt='cucumber logo' className='program-logo' />
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;