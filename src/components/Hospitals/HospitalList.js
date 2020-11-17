import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { HospitalsContext } from "../../contexts/HospitalsContext";
import { useEffect } from "react";
const HospitalList = ({ data }) => {
  const { image, score, address, city, country, slug } = data.body;

  return (
    <div className="hospital card shadow-lg p-0 m-3 col-sm-4 col-xl-3">
      <div className="hospital-image">
        <Link to={`hospitals/${slug}`}>
          <img src={image} className="card-img-top" alt="data.name" />
        </Link>
      </div>
      <div className="card-body">
        <h6 className="card-title text-uppercase font-weight-bolder">
          {data.name}
        </h6>
        {
          <ReactStars
            value={Number(score)}
            count={5}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        }
        <div className="card-overview">
          <div className="d-flex align-items-center">
            <div className="font-weight-bolder">Address:</div>
            <div className="card-sc-btn">{address}</div>
          </div>

          <div className="d-flex align-items-center">
            <div className="font-weight-bolder">City</div>
            <div className="card-sc-btn">{city}</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="font-weight-bolder">Country</div>
            <div className="card-sc-btn">{country}</div>
          </div>
        </div>

        <div className="card-actions">
          <Link to={`hospitals/${data.body.slug}`} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospitalList;
