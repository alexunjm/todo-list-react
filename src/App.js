import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <Tasks></Tasks>
      <Footer></Footer>
    </div>
  );
}

export default App;
