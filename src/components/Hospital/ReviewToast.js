import Toast from "react-bootstrap/Toast";
import React from "react";
import Icofont from "react-icofont";

const ReviewToast = (props) => {
  const { toastInfo } = { props };
  return (
    <Toast>
      <Toast.Header>
        <Icofont icon={toastInfo.icon} />
        <strong className="mr-auto">{toastInfo.title}</strong>
        <small>{toastInfo.status}</small>
      </Toast.Header>
      <Toast.Body>toastInfo.message</Toast.Body>
    </Toast>
  );
};

export default ReviewToast;
