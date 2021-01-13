import React from "react";
import Icofont from "react-icofont";
import "./iconAnimation.scss";
import { Link } from "react-router-dom";

const errorIcon = {
  fontSize: "4rem",
};

const notFound = () => {
  return (
    <div className="container">
      <div className="notfound d-block d-sm-flex">
        <div className="notfound-header">
          <h1 className="text-center font-weight-bolder my-5">
            Page Not Found!
          </h1>
          <div className="bounce-bottom">
            <Icofont
              icon="nerd-smile"
              style={errorIcon}
              className="error-icon text-default"
            />
          </div>
        </div>
        <div className="notfound-content">
          <h4 className="text-center font-weight-bolder my-3">
            Looks like you are at the wrong place!
          </h4>
          <p className="text-center text-secondary my-5">
            There is a lot of places you might want to visit on our website.
          </p>
          <div className="actions">
            <Link to="/" className="btn btn-success">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
