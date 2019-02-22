import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import Sidebar from '../Sidebar';
import Bio from '../../components/Bio';
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
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  selectedNav: state.selectedNav
})

export default withRouter(connect(mapStateToProps)(App));
