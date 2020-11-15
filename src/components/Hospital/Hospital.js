import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ErrorContext } from '../../contexts/ErrorContext'
import { HospitalsContext } from '../../contexts/HospitalsContext'
import { ReviewsContext } from '../../contexts/ReviewsContext'
import AlertContainer from '../containers/AlertContainer'
import Loading from '../containers/Loading'
import Review from './Review'
import Host from './Host'


const Hospital = (props) => {
     const {currentHospital, setCurrentHospital} = useContext(HospitalsContext)
     const {reviews, updateReviews } = useContext(ReviewsContext)
     const [loading, setLoading] = useState(true)
     const { slug } = props.match.params
     const {error, addError } = useContext(ErrorContext)
     useEffect(() => {
         // get individual hospital
         Axios.get(`https://hospitalreviews-api.herokuapp.com/api/v1/hospitals/${slug}.json`)
         .then(res => {
             setLoading(false)
             setCurrentHospital(res.data)
             updateReviews(res.data.reviews.reviews_all)
         }).catch(err => {
             addError(err)
             if(err.response){
                err.response.status === 404 && props.history.push('/404')
             }
         })
     }, [currentHospital.length])

     
        
    const displayHospital = currentHospital.id ? (
        <div className="reviews my-2 py-3 col-sm-10 col-md-8 mx-auto">
            {error.data && <AlertContainer />  }
            <Host hospital={currentHospital} />
            <div className="card shadow-lg border-0 reviews my-3">
                    <h4 className="card-title my-3 text-center font-weight-bolder my-3 text-uppercase"> Reviews</h4>
                    <div className="card-body">
                    { reviews.length ? (
                        reviews && reviews.map( review => (
                            <Review review = {review} key={review.updated_at} />
                        ))
                        
                    ) : (
                        <h6 className="text-center font-weight-bolder">No Reviews Yet</h6>
                    )}
                    </div>
            </div>
        </div>
    ) : (
        <div className="error">
            {loading ?  <Loading /> : <AlertContainer /> }
        </div>
    )

    return (
        <div className="container">
            { displayHospital }
        </div>
    )
}

export default Hospital
