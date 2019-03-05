import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Sidebar from '../Sidebar';
import LandingPage from '../LandingPage';
import Bio from '../Bio';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import ProjectModal from '../ProjectModal';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    let { selectedProj } = this.props
    let modal;
    
    if (selectedProj !== '') {
      modal = <ProjectModal />
    }

    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/bio' component={Bio} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        { modal }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  selectedNav: state.selectedNav,
  selectedProj: state.selectedProj
})

export default withRouter(connect(mapStateToProps)(App));
