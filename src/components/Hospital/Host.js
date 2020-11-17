import React, { useContext, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import Icofont from "react-icofont";
import AddHospital from "../Hospitals/AddHospital";
import Axios from "axios";
import { HospitalsContext } from "../../contexts/HospitalsContext";
import { useHistory } from "react-router-dom";
import ConfirmDelete from "../containers/ConfirmDelete";

const Rating = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

const Host = (props) => {
  const [show, setShow] = useState(false);

  const history = useHistory();
  const { hospital } = props;
  const {
    currentHospital,
    hospitals,
    addNewHospital,
    setCurrentHospital,
  } = useContext(HospitalsContext);

  const handleClick = (e) => {
    setShow(true);
  };

  const { address, country, image, score } = currentHospital.body;
  return (
    <div className="card shadow-lg border-0">
      <img src={image} className="card-img-top" alt="data.name" />

      <h1 className="card-title display-6 my-3 text-uppercase text-center font-weight-bolder">
        {currentHospital.name}
      </h1>
      <div className="actions">
        <button className="btn border-0 remove" onClick={handleClick}>
          {<Icofont icon="bin" className="text-danger remove"></Icofont>}
        </button>
        <AddHospital status="Update" hospital={currentHospital} />
      </div>
      {<ConfirmDelete status="Hospital" show={show} setShow={setShow} />}
      <Rating>
        {
          <ReactStars
            value={Number(score)}
            count={5}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        }
        <h6 className="font-weight-bolder display-6">
          Rated {Number(score) ? parseFloat(score).toFixed(2) : 0} out of 5
        </h6>
      </Rating>

      <div className="card-body">
        <div className="card-overview">
          <span className="font-weight-bolder">Address:</span>
          <span className="card-sc-btn">{address}</span>
          <span className="font-weight-bolder">Country:</span>{" "}
          <span className="card-sc-btn">{country}</span>
        </div>

        <div className="btn-container mx-auto my-5">
          <ReviewForm hospital={currentHospital} />
        </div>
      </div>
    </div>
  );
};

export default Host;
