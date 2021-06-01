import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// this entire component is currently non-generic. rewrite if needed in future
const ModalComponent = ({ restart, buttonClass }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={buttonClass} variant="primary" onClick={handleShow}>
        Restart
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to restart?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You will lose any progress.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); restart(); }}>
            Restart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export { ModalComponent };