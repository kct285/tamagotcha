import React, {Component} from 'react';

class Numberpad extends Component{
  
    render(){
        let numberpad = (
            <div>
                {this.props.children}
            </div>
        ); 

        if (!this.props.numOpen){
            numberpad=null;
        }

        return(
            <div>
                {numberpad}

            </div>
        )
    }





}


export default Numberpad;