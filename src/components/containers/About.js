import React from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

const errorIcon = {
  fontSize: "4rem",
};

const About = () => {
  return (
    <div className="container">
      <div className="notfound d-block d-sm-flex">
        <div className="notfound-header">
          <h1 className="text-center font-weight-bolder text-center my-5">Oh! Hey!</h1>
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
            Glad we are about to do this!
          </h4>
          <section className="description">
            <h6 className="font-weight-bold text-center">For starters!</h6>
            <p className="text-center text-secondary my-5">
              This app is built using
              <li className="text-primary">Rails</li>
              <li className="text-primary">React</li>
              <li className="text-primary">React-Bootstrap</li>
              <li className="text-primary">JavaScript</li>
              <li className="text-primary">Node-Sass</li>
              <p className="more my-5">
                You can find the whole project and it's documentation on my{" "}
                <a
                  href="https://github.com/kelibst/hospital_reviews"
                  target="_blank"
                  className="text-link"
                >
                  Github
                </a>{" "}
              </p>
            </p>
          </section>

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

export default About;
