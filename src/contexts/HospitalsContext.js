import React, { createContext, useState } from "react";

export const HospitalsContext = createContext();

const HospitalsContextProvider = (props) => {
  const [hospitals, setHospitals] = useState([]);
  const [currentHospital, setHospital] = useState([]);
  const addNewHospital = (hospitals) => {
    setHospitals(hospitals);
  };

  const setCurrentHospital = (hospital) => {
    setHospital(hospital);
  };
  return (
    <HospitalsContext.Provider
      value={{ hospitals, addNewHospital, currentHospital, setCurrentHospital }}
    >
      {props.children}
    </HospitalsContext.Provider>
  );
};

export default HospitalsContextProvider;
