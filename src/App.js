import React from 'react';
//import User from './User';
//import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainers'
import HeaderContainer from './containers/HeaderContainer';


function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
     
    </div>
  );
}

export default App;
