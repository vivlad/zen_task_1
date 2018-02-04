import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Content from './components/Content/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
