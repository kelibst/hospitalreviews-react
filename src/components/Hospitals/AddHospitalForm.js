import Axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import CountryList from "../containers/CountryList";
import { ErrorContext } from "../../contexts/ErrorContext";
import { HospitalsContext } from "../../contexts/HospitalsContext";

const AddHospitalForm = (props) => {
  const {
    hospitals,
    addNewHospital,
    currentHospital,
    setCurrentHospital,
  } = useContext(HospitalsContext);
  const { addError } = useContext(ErrorContext);

  let history = useHistory();

  const [hospital, setHospital] = useState({
    name: currentHospital.name ? currentHospital.name : "",
    country: currentHospital.body ? currentHospital.body.country : "",
    city: currentHospital.body ? currentHospital.body.city : "",
    address: currentHospital.body ? currentHospital.body.address : "",
    image: currentHospital.body ? currentHospital.body.image : "",
    slug: currentHospital.body ? currentHospital.body.slug : "",
  });
  const { status, close } = props;

  // const { country, address, city, image} = hospital.body
  const handleChange = (e) => {
    const { id, value } = e.target;
    setHospital(Object.assign({}, hospital, { [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status === "Add") {
      hospital.name = hospital.name.trim();

      Axios.post(
        "https://hospitalreviews-api.herokuapp.com/api/v1/hospitals.json",
        { hospital }
      )
        .then((res) => {
          const newHost = [...hospitals, res.data];
          addNewHospital(newHost);
          setCurrentHospital(res.data);
          setHospital({
            name: currentHospital.name ? currentHospital.name : "",
            country: "",
            city: "",
            address: "",
            image: "",
            slug: "",
          });
          history.push(`/hospitals/${res.data.body.slug}`);
        })
        .catch((err) => {
          if (err.response) {
            addError(err.response);
          } else if (err.request) {
            addError(err.request);
          } else {
            const message = {
              error: {
                name: "Try to refresh the browser.",
              },
            };
            addError(message);
          }
        });
      close();
    } else if (status === "Update") {
      const { slug } = currentHospital.body;
      hospital.name = hospital.name.trim();

      Axios.patch(
        `https://hospitalreviews-api.herokuapp.com/api/v1/hospitals/${slug}.json`,
        { hospital }
      )
        .then((res) => {
          setCurrentHospital(Object.assign({}, currentHospital, res.data));
          history.push(`/hospitals/${res.data.body.slug}`);
        })
        .catch((err) => {
          if (err.response) {
            addError(err.response);
          } else if (err.request) {
            addError(err.request);
          } else {
            const message = {
              error: {
                name: "something went wrong",
              },
            };
            addError(message);
          }
        });
      close();
    }
  };

  return (
    <div className="form-container">
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Enter Hospital Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Benedicta Hospital"
              value={hospital.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Select a Country</Form.Label>
            <Form.Control
              as="select"
              value={hospital.country}
              onChange={handleChange}
            >
              {CountryList.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Enter the address of the hospital</Form.Label>
            <Form.Control
              value={hospital.address}
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>Enter your City Name</Form.Label>
            <Form.Control
              value={hospital.city}
              type="text"
              placeholder="Accra"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Enter the hospital image link</Form.Label>
            <Form.Control
              value={hospital.image}
              type="text"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          {`${status} Hospital`}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default AddHospitalForm;
