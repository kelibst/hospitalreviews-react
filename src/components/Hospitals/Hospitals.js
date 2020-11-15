import Axios from 'axios'
import React, {useContext, useEffect } from 'react'
import { useState } from 'react'
import { ErrorContext } from '../../contexts/ErrorContext'
import { HospitalsContext } from '../../contexts/HospitalsContext'
import AlertContainer from '../containers/AlertContainer'
import Loading from '../containers/Loading'
import HospitalList from './HospitalList'
import './hospitals.scss'


const Hospitals = () => {
    const  { hospitals, addNewHospital }  =  useContext(HospitalsContext)
    const [loading, setLoading] = useState(true)
    const  { error, addError }  =  useContext(ErrorContext)
   
    useEffect(() => {
        // get all the hospitals
        
        Axios.get('https://hospitalreviews-api.herokuapp.com/api/v1/hospitals.json')
        .then(res => {
            setLoading(false)
            addNewHospital(res.data)
        }).catch(err => {
            setLoading(false)
            addError(err)
        })
    }, [hospitals.length])

    const hospitalList = hospitals.length ? (
        hospitals && hospitals.map (hospital => <HospitalList key={hospital.name} data = { hospital } /> )
    ) : (
       loading ? <Loading /> : (<AlertContainer />)
    )
   
    return (
        <div className="hospital mx-3">
       
            <h1 className="text-dark display-5 mb-5 font-weight-bolder"> List of All Hospitals</h1>

            <div className="row m-0">
               { hospitalList }
            </div> 
        </div>
        
    );
    
}

export default Hospitals
