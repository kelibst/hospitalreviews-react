import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import './App.scss';
import HospitalsContextProvider from './contexts/HospitalsContext';
import ReviewsContextProvider from './contexts/ReviewsContext';
import ErrorContextProvider from './contexts/ErrorContext';
import SideBar from './components/layouts/SideBar.js'
import Footer from './components/layouts/Footer';

const App = () =>{
  return (
    <div className="wrapper d-sm-flex">
    <HospitalsContextProvider>
      <ReviewsContextProvider>
        <ErrorContextProvider>
        
      <SideBar />

      <div className="content bg-light">        
          <div className="d-sm-none">
              <Footer />
          </div>
        </div>

        </ErrorContextProvider>
      </ReviewsContextProvider>
    </HospitalsContextProvider>
    </div>
  );
}

export default App;
