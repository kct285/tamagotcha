import React, {Component} from 'react';
import Info from './components/Info';
import Numberpad from './components/Numberpad';
import NumPad from 'react-numpad';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      isOpen: false,
      numOpen: false,
      type:"+",
      curr:'',
      value:0
    }
    this.AddSub = this.AddSub.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  AddSub(thing){
    
    let what = parseInt(thing);
    if (this.state.type==="+"){  
      this.setState((state)=>({
        value:state.value + what
      }))  
    }
    else{
      this.setState((state)=>({
        value:state.value - what
      }))
    }
  }
  onSubmit(thing){
    this.AddSub(thing);
    this.setState({numOpen:false});
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

      <div id="money"> {this.state.value} </div>

      <img id="baby" src={process.env.PUBLIC_URL + '/baby.gif'} />




      {/* NUMBER INPUT SECTION */}

      <div className="button_flex">
      <div className="button" onClick={(e) => this.setState ({numOpen:true, type:"-" })} >
        <a href="#"> - </a>
      </div>
      <div className="button" onClick={(e) => this.setState ({numOpen:true , type:"+"})} >
        <a href="#"> + </a>
      </div>

      <br></br>


      <Numberpad numOpen = {this.state.numOpen} onSubmit={this.onSubmit}>
        <div className="infomodal">
           <div className="info_modalcontent">
           <span className="close" onClick={(e) => this.setState ({numOpen:false })}> &times;</span>

            
    
           </div>
        </div>

      </Numberpad>


      

      </div>
      

      




    </div>
  );
}
}


export default App;
