import React from 'react'; 

export default function Modal (props){
  function Modal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          ?
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome</Modal.Title>
          </Modal.Header>
          <Modal.Body>Text text text</Modal.Body>
        </Modal>
      </>
    );
  }

  render(<Modal />);

}
