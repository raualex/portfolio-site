import React, { Component } from 'react';
import logo from '../../utils/assets/logo.svg';
import './App.css';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

class App extends Component {
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
