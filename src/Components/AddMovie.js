import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
function AddMovie({ getnewmovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewmovie] = useState({});

  const handleSubmit = () => {
    getnewmovie(newMovie);
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new movie ...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h7>Title of movie</h7>
          <Form.Control
            type="text"
            placeholder="Title of movie"
            onChange={(e) =>
              setNewmovie({
                ...newMovie,
                title: e.target.value,
              })
            }
          />
          <h7>posteUrl of movie</h7>
          <Form.Control
            type="text"
            placeholder="posteUrl of movie"
            onChange={(e) =>
              setNewmovie({
                ...newMovie,
                posteUrl: e.target.value,
              })
            }
          />
          <h7>Description of movie</h7>
          <Form.Control
            type="text"
            placeholder="Description of movie"
            onChange={(e) =>
              setNewmovie({
                ...newMovie,
                description: e.target.value,
              })
            }
          />
          <h6>Rate of movie</h6>
          <Form.Control
            type="text"
            placeholder="Rate of movie"
            onChange={(e) =>
              setNewmovie({
                ...newMovie,
                rate: e.target.value,
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie;
