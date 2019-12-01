import React, {Component} from 'react'; 


class Info extends Component{
  render() {
      let info = (
        <div>

        {this.props.children} 
      </div>

      );
      if (!this.props.isOpen){
          info = null ;

      }
      
    return(
        <div> 
        {info}
        </div>

      
    );
    }

}

export default Info; 





