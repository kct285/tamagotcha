import React, {Component} from 'react';
import Info from './components/Info';
import Numberpad from './components/Numberpad';
import NumPad from 'react-numpad';

import './App.css';


class App extends Component {
  state ={
    isOpen: false,
    numOpen: false
  }

  
  
  render(){

    const myTheme = {
      global: {
        fontFamily: 'Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace; ',
      },
      header: {
        primaryColor: 'black',
        secondaryColor: '#E6CCE3',
        highlightColor: '#E6CCE3',
        backgroundColor: 'black',
      },
      body: {
        primaryColor: '#263238',
        secondaryColor: 'lightpink',
        highlightColor: 'lightpink',
        backgroundColor: '#f9f9f9',
      },
      panel: {
        backgroundColor: '#CFD8DC'
      }
    };

  return (
    <div className="App">


      {/* INSTRUCTIONS SECTION */}
      <Info isOpen = {this.state.isOpen}>
      <div className="infomodal">
        <div className="info_modalcontent">
        <span className="close" onClick={(e) => this.setState ({isOpen:false })}> &times;</span>
        <h3 className="infomessage"> Nice to meet you!</h3>
        <p className="infotext"> It's simple. Earn money to keep me happy and healthy. <br></br> <br></br>
        Spend too much and I'll get sick and die :( <br></br> <br></br>
        Click the "+" to add earned money <br></br> and "-" for spend money
           </p>
        </div>
      </div>

      </Info>

      <button className="infobutton" onClick={(e) => this.setState ({isOpen:true })}> ?</button>




      {/* TAMAGOTCHI STATUS */}
      <img id="heartbar" src= {process.env.PUBLIC_URL + '/3hearts.png'} /> 

      <div id="money"> [number] </div>

      <img id="baby" src={process.env.PUBLIC_URL + '/baby.gif'} />




      {/* NUMBER INPUT SECTION */}


      <Numberpad numOpen = {this.state.numOpen}>
        <div className="infomodal">
           <div className="info_modalcontent">
           <span className="close" onClick={(e) => this.setState ({numOpen:false })}> &times;</span>

           <NumPad.Number
            onChange={(value) => { console.log('value', value)}}
            placeholder={'Input'}
            value={''}
            decimal={2}
            theme={myTheme}
              />
    
           </div>
        </div>

      </Numberpad>


      <div className="button_flex">
      <div className="button" onClick={(e) => this.setState ({numOpen:true })} >
        <a href="#"> + </a>
      </div>
      <div className="button" onClick={(e) => this.setState ({numOpen:true })} >
        <a href="#"> - </a>
      </div>

      </div>
      

      




    </div>
  );
}
}


export default App;
