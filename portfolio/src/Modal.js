import React,{ Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
export default function Modal() {
  const [setShow] = useState(false);
  const[show] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Houston, We have a problem!</Modal.Title>
        </Modal.Header>
        <Modal.Body>It looks like something went wrong with submission!please try again</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" active onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
