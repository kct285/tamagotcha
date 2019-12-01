import React, {Component} from 'react';
import Info from './components/Info';
import './App.css';


class App extends Component {
  state ={
    isOpen:false 
  }
  
  render(){
  return (
    <div className="App">
      

      <Info isOpen = {this.state.isOpen}>
      <div className="infomodal">
        <div className="info_modalcontent">
        <span className="close" onClick={(e) => this.setState ({isOpen:false })}> &times;</span>
        <h3 className="infomessage"> Nice to meet you!</h3>
        <p> It's simple. Earn money to keep me happy and healthy. <br></br> <br></br>
        Spend too much and I'll get sick and die :( <br></br> <br></br>
        Click the "+" to add earned money <br></br> and "-" for spend money
           </p>
        </div>
      </div>

      </Info>

      <button className="infobutton" onClick={(e) => this.setState ({isOpen:true })}> ?</button>


      <img id="heartbar" src= {process.env.PUBLIC_URL + '/3hearts.png'} /> 

      <div id="money"> [number] </div>


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
}


export default App;
