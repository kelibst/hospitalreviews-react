import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddHospitalForm from "./AddHospitalForm";
import Icofont from "react-icofont";


const AddHospital = (props) => {
  const [show, setShow] = useState(false);
  const { status, hospital } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="btn btn-success" onClick={handleShow}>
        <Icofont icon={status === "Update" ? "quill-pen" : "ui-add"}></Icofont>
        {status} a Hosptal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="font-weight-bolder"> {status} a Hospital </span>{" "}
          </Modal.Title>
        </Modal.Header>
        <AddHospitalForm
          initalHospital={hospital}
          status={status}
          close={handleClose}
          show={handleShow}
        />
      </Modal>
    </div>
  );
};

export default AddHospital;
