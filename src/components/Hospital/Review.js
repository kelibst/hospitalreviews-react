import Axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import Icofont from "react-icofont";
import ReactStars from "react-rating-stars-component";
import { ReviewsContext } from "../../contexts/ReviewsContext";
import ConfirmDelete from "../containers/ConfirmDelete";
import UpdateReview from "./updateReview";

const Review = (props) => {
  const {
    reviews,
    updateReviews,
    currentReview,
    updateCurrentReview,
  } = useContext(ReviewsContext);
  const { review } = props;
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    if (e.target.classList.contains("remove")) {
      setShow(true);
    }
  };
  return (
    <div className="card p-3 my-3 reviews">
      <h4 className="card-title text-capitalize ">{review.title} </h4>
      <div className="card-overview">
        <span className="font-weight-bolder">Author:</span>
        <span className="card-sc-btn">{review.reviewer_name}</span>
        {
          <ReactStars
            value={review.score}
            count={5}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        }
      </div>

      <div className="card-body border-sm">{review.description}</div>
      <div className="card-foot">
        <button className="btn border-0 remove" onClick={handleClick}>
          {<Icofont icon="bin" className="text-danger remove"></Icofont>}
        </button>
        <UpdateReview review={review} status="Update" />
      </div>
      <ConfirmDelete
        status="Review"
        sRev={review}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default Review;
