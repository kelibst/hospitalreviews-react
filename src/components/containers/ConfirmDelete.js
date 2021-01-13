import Axios from "axios";
import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { HospitalsContext } from "../../contexts/HospitalsContext";
import { ReviewsContext } from "../../contexts/ReviewsContext";

const ConfirmDelete = (props) => {
  const { status, show, setShow, sRev } = props;
  const { currentHospital, hospitals, addNewHospital } = useContext(
    HospitalsContext
  );
  const {
    reviews,
    updateReviews,
    currentReview,
    updateCurrentReview,
  } = useContext(ReviewsContext);
  const history = useHistory();

  const handleDelete = (e) => {
    if (status === "Hospital") {
      const { slug } = currentHospital.body;

      Axios.delete(
        `https://hospitalreviews-api.herokuapp.com/api/v1/hospitals/${slug}.json`
      )
        .then((res) => {
          let newHospitalsList = hospitals.filter(
            (host) => host.id !== currentHospital.id
          );
          addNewHospital(newHospitalsList);
          history.push("/");
        })
        .catch((err) => {
          err.response.status === 404 && console.log("Page not found");
        });
    } else if (status === "Review") {
      Axios.delete(
        `https://hospitalreviews-api.herokuapp.com/api/v1/reviews/${sRev.id}.json`
      )
        .then((res) => {
          let newReviews = reviews.filter((rev) => rev.id !== sRev.id);
          updateReviews(newReviews);
        })
        .catch((err) => {
          debugger;
        });
    }
  };
  return (
    <div className="alert-container">
      <Alert show={show} id="delete" variant="danger">
        <Alert.Heading className="font-weight-bolder">
          Careful Now! you are about to delete a {status}{" "}
        </Alert.Heading>
        <div>Proceed and delete this {status}</div>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleDelete} variant="outline-danger">
            Delete
          </Button>

          <Button onClick={() => setShow(false)} variant="outline-primary">
            Close
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default ConfirmDelete;
