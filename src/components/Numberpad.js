import React,{Component} from 'react';


let what = []
for (let i=1;i<13;i++){
    if (i==10){
        what.push("←")
        continue;
    }
    if (i==11){
        what.push(0)
        continue;
    }
    if (i==12){
        what.push("✓");
        continue;
    }
  what.push(i);
}






class Calculator extends Component {
  constructor(props){
    super(props);
    this.state={
      value:"",
      data:'',
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    console.log(e.target)
    if (e.target.value==="←"){
        this.setState({value: this.state.value.substring(0, this.state.value.length - 1)})
    }
    else if (e.target.value==="✓"){
        this.props.onSubmit(this.state.value);
    }
    else{this.setState({value:this.state.value+e.target.value})};
  }

  // setData = (event) => {
  //   this.setState({
  //     data: event.target.value
  //   })
  // }
  submitData = () => {
    this.props.pushToDB("data", {text: this.state.data});
  }

  render(){

  const okay = what.map(function(i)

  {return (
              
    
  
    <button className="keypadButton" value={i} onClick={this.onClick}>
      {i}
      </button>
      
      )}, this);
    
  return(
    <div>
      <input className="keypad" value={this.state.value} onSubmit={this.props.onSubmit}/>
      <div className="grid_container"> 
      {okay}

      </div>
    </div>

    )

    // who needs a package when filip could code a keypad in 10 minutes :o 
    // thank u filip!!
  

    }
}

export default Calculator;