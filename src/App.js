import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="heartbar" src= {process.env.PUBLIC_URL + '/3hearts.png'} /> 
      <img id="baby" src={process.env.PUBLIC_URL + '/baby.gif'} />


      <div class="button_flex">
      <div class="button">
        <a href="#"> + </a>
      </div>
      <div class="button">
        <a href="#"> - </a>
      </div>

      </div>
      

      







    </div>
  );
}

export default App;
