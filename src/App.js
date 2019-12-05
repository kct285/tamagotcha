import React, {Component} from 'react';
import Info from './components/Info';
import Numberpad from './components/Numberpad';
import Heart from './components/Heart';
import Tamagotchi from './components/Tamagotchi';
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
    this.num = 
    <Numberpad numOpen = {this.state.numOpen} onSubmit={this.onSubmit}/>

  }
  
  AddSub(thing){
    if(!thing){
      return;
    }
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
    let Numberpad = this.state.numOpen?this.num:null;
    let modal = this.state.numOpen?"info_modalcontent":null;
    let xmarks = this.state.numOpen?"close":null;


    
  
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
      {/* </div> */}

      </Info>

      <button className="infobutton" onClick={(e) => this.setState ({isOpen:true })}> ?</button>




      {/* TAMAGOTCHI STATUS */}

      <Heart money={this.state.value}/>


      <div id="money">
             <p id="money_text">
             {this.state.value}
             </p>
            
              </div>

      <Tamagotchi money={this.state.value}/>






      {/* NUMBER INPUT SECTION */}
      <div className="button_flex">
      <div className="button" onClick={(e) => this.setState ({numOpen:true, type:"-" })} >
        <a href="#"> - </a>
      </div>
      <div className="button" onClick={(e) => this.setState ({numOpen:true , type:"+"})} >
        <a href="#"> + </a>

        </div>

      <br></br>

      <div className="infomodal">
       <div className={modal}>
         <div className={xmarks}>

       {Numberpad}

       </div>
       </div>
       </div>





    
    </div>
    </div>
  );
}
}


export default App;
