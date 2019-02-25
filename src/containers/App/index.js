import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import Sidebar from '../Sidebar';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import Projects from '../Projects';
import Contact from '../../components/Contact';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path='/bio' component={Bio} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  selectedNav: state.selectedNav
})

export default withRouter(connect(mapStateToProps)(App));
