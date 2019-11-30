import React from 'react';
// import Modal from './components/Modal';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* <Modal /> */}




      <button className="infobutton">?</button>

      
      <div className="infomodal">
        <div className="info_modalcontent">
        <span className="close"> &times;</span>
        <h3 className="infomessage"> Nice to meet you!</h3>
        <p> It's simple. Earn money to keep me happy and healthy. <br></br> <br></br>
        Spend too much and I'll get sick and die :( </p>
        </div>
      </div>


      <img id="heartbar" src= {process.env.PUBLIC_URL + '/3hearts.png'} /> 
      <img id="baby" src={process.env.PUBLIC_URL + '/baby.gif'} />


      <div className="button_flex">
      <div className="button">
        <a href="#"> + </a>
      </div>
      <div className="button">
        <a href="#"> - </a>
      </div>

      </div>
      

      




    </div>
  );
}


export default App;
