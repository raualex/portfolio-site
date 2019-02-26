import React from 'react';
import './Skills.css';
import react from '../../utils/assets/logos/react-logo.png';
import redux from '../../utils/assets/logos/redux-logo.png';
import jshtmlcss from '../../utils/assets/logos/javascript-html-css-logos.png';
import jquery from '../../utils/assets/logos/jquery-logo.png';
import node from '../../utils/assets/logos/node-logo.png';
import express from '../../utils/assets/logos/expressjs-logo.png';
import knex from '../../utils/assets/logos/knex-logo.png';
import postgresql from '../../utils/assets/logos/postgresql-logo.png';
import microsoftsql from '../../utils/assets/logos/microsoft-sql-server-logo.png';
import chaimocha from '../../utils/assets/logos/chai-mocha.png';
import enzymejest from '../../utils/assets/logos/enzyme-jest.png';
import travis from '../../utils/assets/logos/travisCI-logo.png';
import git from '../../utils/assets/logos/git-logo.png';
import github from '../../utils/assets/logos/github-logo.png';
import heroku from '../../utils/assets/logos/heroku-logo.png';
import waffleio from '../../utils/assets/logos/waffleio.png';
import jira from '../../utils/assets/logos/jira-logo.png';
import ember from '../../utils/assets/logos/ember-logo.svg';
import vue from '../../utils/assets/logos/vue-logo.svg';
import angular from '../../utils/assets/logos/angular-logo.svg';
import cucumber from '../../utils/assets/logos/cucumber-logo.png';

export default function Skills() {

  return(
    <div className='skills-container'>
      <div className='skills-box'>
        <div className='front-end-skills'>
          <h1>Front-End</h1>
          <img src={react} alt='react logo' className='react-logo' />
          <img src={redux} alt='redux logo' className='redux-logo' />
          <img src={jshtmlcss} alt='javscript html and css logo' className='htmlcssjs-logos' />
          <img src={jquery} alt='j query logo' className='jquery-logo' />
        </div>
        <div className='back-end-skills'>
          <h1>Back-End</h1>
          <img src={node} alt='node logo' className='node-logo' />
          <img src={express} alt='express logo' className='express-logo' />
          <img src={knex} alt='knex logo' className='knex-logo' />
          <img src={postgresql} alt='postgres logo' className='postgresql-logo' />
          <img src={microsoftsql} alt='microsoft sql server logo' className='mssql-logo' />
        </div>
        <div className='testing-skills'>
          <h1>Testing</h1>
          <img src={chaimocha} alt='chai and mocha logos' className='chaimocha-logos' />
          <img src={enzymejest} alt='enzyme and jest logos' className='enzymejest-logos' />
          <img src={travis} alt='Travis CI logo' className='travisci-logo' />
        </div>
        <div className='workflow-skills'>
          <h1>Workflow/Tools</h1>
          <img src={git} alt='git logo' className='git-logo' />
          <img src={github} alt='github logo' className='github-logo' />
          <img src={heroku} alt='heroku logo' className='heroku-logo' />
          <img src={waffleio} alt='waffle IO logo' className='waffleio-logo' />
          <img src={jira} alt='jira logo' className='jira-logo' />
        </div>
        <div className='currently-learning-skills'>
          <h1>Currently Learning</h1>
          <img src={ember} alt='ember logo' className='ember-logo' />
          <img src={vue} alt='vue logo' className='vue-logo' />
          <img src={angular} alt='angular logo' className='angular-logo' />
          <img src={cucumber} alt='cucumber logo' className='cucumber-logo' />
        </div>
      </div>
    </div>
  )
}
