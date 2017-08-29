import React, { Component } from 'react';
import Nav from './nav';
import Intro from './intro';
import Who from './who';
import What from './what';
import Touch from './touch';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Nav/>
      <div id="wrapper">
        <Intro/>
        <Who/>
        <What/>
        <Touch/>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default App;
