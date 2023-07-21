import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Swal from "sweetalert2";

function Add(props) {
  let navigate = useNavigate();
  const options = ["active", "Inactive"];

  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState(options[0]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleEdit = () => {
    setShow(true);
  };

  const index = Data.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSave = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uni = ids.slice(0, 8);

    let a = title,
      b = status;
    Data.push({ id: uni, title: a, state: b });

    navigate("/");
    setShow(false);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <img
        onClick={handleEdit}
        src="https://cdn-icons-png.flaticon.com/512/6711/6711415.png"
        alt="add"
        style={{ width: "30px", cursor: "pointer" }}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <div>
              <select onChange={(e) => setStatus(e.target.value)}>
                {options.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSave(e)}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
