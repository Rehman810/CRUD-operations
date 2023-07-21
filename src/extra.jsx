import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Data from "./Data";

function Edit(props) {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  let navigate = useNavigate();

  const index = Data.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Data[index];
    a.title = title;
    a.status = status;
    setShow(false);
    navigate("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setStatus(localStorage.getItem("status"));
    setTitle(localStorage.getItem("title"));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, title, status) => {
    localStorage.setItem("id", id);
    localStorage.setItem("status", status);
    localStorage.setItem("title", title);
    setShow(true);
  };

  const options = ["active", "Inactive"];
  const [myValue, setMyValue] = useState(options[0]);

  return (
    <>
      <img
        onClick={handleShow(props.id, props.title, props.status)}
        style={{ width: "30px", cursor: "pointer" }}
        src="https://cdn-icons-png.flaticon.com/512/32/32355.png"
        alt="delete"
      />

      <Modal show={show} onHide={() => handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                autoFocus
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <div>
              <select
                onChange={(e) => setMyValue(e.target.value)}
                defaultValue={myValue}
              >
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
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
