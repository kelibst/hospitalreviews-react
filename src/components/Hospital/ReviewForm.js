import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ReviewForm.scss";
import AddReview from "./AddReview";
const ReviewForm = (props) => {
  const { hospital } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" className="btn-rev mt-4" onClick={handleShow}>
        Add a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Tell us about your experience at{" "}
            <span className="font-weight-bolder"> {hospital.name} </span>{" "}
          </Modal.Title>
        </Modal.Header>
        <AddReview
          hospital={hospital}
          initalReview={{}}
          status="Add"
          close={handleClose}
          show={handleShow}
        />
      </Modal>
    </div>
  );
};

export default ReviewForm;
