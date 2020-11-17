import Axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import { ErrorContext } from "../../contexts/ErrorContext";
import { ReviewsContext } from "../../contexts/ReviewsContext";




const AddReview = (props) => {


  const { hospital, initalReview, status, close } = props;  
  const {addError} = useContext(ErrorContext)
  
  const {reviews, updateReviews  } = useContext(ReviewsContext)
  
  const [review, setReview] = useState(initalReview);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setReview(Object.assign({}, review, { [id]: value }));
  };

  const ratingChanged = (newRating) => {
    setReview(Object.assign(initalReview, review, { "score": newRating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(status === 'Add'){
      const { id: hospital_id } = hospital;

     
      Axios.post("https://hospitalreviews-api.herokuapp.com/api/v1/reviews.json", { review, hospital_id })
        .then((res) => {
          let allRev = [...reviews, review]
          updateReviews(allRev)
        })
        .catch((err) => {
          if (err.response) {
            addError(err.response)
          } else if (err.request) {
            addError(err.request)
          } else {
            const message = {error: {
              name: "Try to refresh the browser."
            }}
            addError(message)
          }
        });
      close();
    }else if(status === "Update"){
     
      Axios.patch(`https://hospitalreviews-api.herokuapp.com/api/v1/reviews/${review.id}.json`, { review })
        .then((res) => {
          let curRev = reviews.filter(rev => rev.id !== res.data.id)
          let allRev = [...curRev, res.data]
          updateReviews(allRev)
        })
        .catch((err) => {
           if (err.response) {
            addError(err.response)
          } else if (err.request) {
            addError(err.request)
          } else {
            const message = {error: {
              name: "Try to refresh the browser."
            }}
            addError(message)
          }
        });
      close();
    }
    
    
  };

  return (
    <div className="form-container">
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="reviewer_name">
            <Form.Label>Enter your Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Keli Booster"
              value={review.reviewer_name ? review.reviewer_name : ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label>Enter the title for this review.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Great hospital"
              value={review.title ? review.title : ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Describe your experience.</Form.Label>
            <Form.Control
              placeholder="The nurses here were really great!"
              as="textarea"
              rows={3}
              value={review.description ? review.description : ""}
              onChange={handleChange}
            />
          </Form.Group>


          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={42}
            value={review.score ? review.score : 0}
            activeColor="#ffd700"
          />
          
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          { `${status} Review`}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default AddReview;
