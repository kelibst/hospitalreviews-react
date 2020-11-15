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
import UserInfo from './components/layouts/UserInfo';
import Hospitals from './components/Hospitals/Hospitals';
import Hospital from './components/Hospital/Hospital';
import About from './components/containers/About'
import notFound from './components/containers/notFound'
const App = () =>{
  return (
    <div className="wrapper d-sm-flex">
    <HospitalsContextProvider>
      <ReviewsContextProvider>
        <ErrorContextProvider>
         <SideBar />
     

        <div className="content bg-light">  
          <UserInfo />  
          <Switch>
            <Route exact path="/" component={Hospitals} />
            <Route exact path="/hospitals/:slug" component={Hospital} />
            <Route exact path="/about" component={About} />
            <Route exact path="/404" component={notFound} /> 
          </Switch>    
            
        </div>

        <div className="d-sm-none">
            <Footer />
        </div>
        </ErrorContextProvider>
      </ReviewsContextProvider>
    </HospitalsContextProvider>
    </div>
  );
}

export default App;
