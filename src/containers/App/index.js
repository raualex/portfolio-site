import React, { Component } from 'react';
import './App.css';
import { Header } from '../../components/Header';
import Sidebar from '../Sidebar';
// import { withRouter } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
