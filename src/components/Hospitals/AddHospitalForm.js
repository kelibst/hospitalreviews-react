import Axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Redirect, useHistory } from "react-router-dom";
import CountryList from "../../../assets/CountryList";
import { ErrorContext } from "../../contexts/ErrorContext";
import { HospitalsContext } from "../../contexts/HospitalsContext";



const AddHospitalForm = (props) => {
  const  { hospitals, addNewHospital, currentHospital, setCurrentHospital }  =  useContext(HospitalsContext)
  const {error, addError} = useContext(ErrorContext)
 
  let history = useHistory()
  
  const [validated, setValidated] = useState(false);
  const [hospital, setHospital] = useState({});
  const {status, show, close } = props;  
  
  // const { country, address, city, image} = hospital.body
  const handleChange = (e) => {
    const { id, value } = e.target;
    status === "Add" ? (setHospital(Object.assign({}, hospital, { [id]: value }))) : (setCurrentHospital(Object.assign({}, currentHospital, { [id]: value })))
  };
  
  const string_parameterize =  (str1) =>{
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    
    if(status === 'Add'){
      hospital.name = hospital.name.trim();
      
      Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      Axios.post("/api/v1/hospitals.json", { hospital })
        .then((res) => {
          const newHost = [...hospitals, res.data]
          addNewHospital(newHost)
          setCurrentHospital(res.data)
          history.push(`/hospitals/${res.data.body.slug}`)
        })
        .catch((err) => {
          if (err.response) {
            addError(err.response)
          } else if (err.request) {
            addError(err.request)
          } else {
            message = {error: {
              name: "something went wrong"
            }}
            addError(message)
          }
        });
      close();
    }else if(status === "Update"){
      const { slug } = currentHospital.body
      hospital.name = currentHospital.name.trim();
     
      
      Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      Axios.patch(`/api/v1/hospitals/${slug}.json`, { hospital })
        .then((res) => {
          currentHospital.body.slug = string_parameterize(currentHospital.name)
          setCurrentHospital(Object.assign({}, currentHospital, hospital ))
          history.push(`/hospitals/${currentHospital.body.slug}`)
        })
        .catch((err) => {
          if (err.response) {
            addError(err.response)
          } else if (err.request) {
            addError(err.request)
          } else {
            message = {error: {
              name: "something went wrong"
            }}
            addError(message)
          }
        }); 
        close()
    }
   
    
  };
  const greVal = status === "Add" ? hospital : currentHospital
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
              value={greVal.name ? greVal.name : ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="country">
          <Form.Label>Select a Country</Form.Label>
          <Form.Control as="select" value={greVal.id ? greVal.body.country : greVal.country} onChange={handleChange}>
            { CountryList.map( country => (
              <option key={country}>{country}</option>
            ))}
            
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Enter the address of the hospital</Form.Label>
          <Form.Control value={greVal.id ? greVal.body.address : greVal.address} type="text" onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Enter your City Name</Form.Label>
          <Form.Control value={greVal.id  ? greVal.body.city : greVal.city} type="text" placeholder="Accra" onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Enter the hospital image link</Form.Label>
          <Form.Control value={ greVal.id ? greVal.body.image : greVal.image} type="text" onChange={handleChange}/>
        </Form.Group>
      </Form> 
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          { `${status} Hospital`}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default AddHospitalForm;
