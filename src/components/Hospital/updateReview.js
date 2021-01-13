import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ReviewForm.scss";
import AddReview from "./AddReview";
import Icofont from "react-icofont";

const UpdateReview = (props) => {
  const { review } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        variant="btn border-0 remove"
        className="btn-rev mt-4"
        onClick={handleShow}
      >
        {<Icofont icon="quill-pen" className="text-primary update"></Icofont>}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="font-weight-bolder"> Update your review </span>{" "}
          </Modal.Title>
        </Modal.Header>
        <AddReview
          hospital={{}}
          initalReview={review}
          status="Update"
          close={handleClose}
          show={handleShow}
        />
      </Modal>
    </div>
  );
};

export default UpdateReview;
