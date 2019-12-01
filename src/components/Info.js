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







// export default function Modal (props){
//   function Modal() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           ?
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Welcome</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Text text text</Modal.Body>
//         </Modal>
//       </>
//     );
//   }

//   render(<Modal />);

// }
