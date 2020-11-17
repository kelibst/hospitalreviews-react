import React from "react";
import { useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { ErrorContext } from "../../contexts/ErrorContext";

const AlertContainer = () => {
  const [show, setShow] = useState(true);
  const { error } = useContext(ErrorContext);
  return (
    <div>
      <Alert show={show} variant="danger">
        <Alert.Heading>Sorry Something went wrong!</Alert.Heading>
        <div>
          {error.request && <h6 className="my-5">{error.request.response}</h6>}
          {error.response && (
            <h6 className="my-5">{error.response.data.error}</h6>
          )}
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            close
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertContainer;
