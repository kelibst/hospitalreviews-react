import React, { createContext, useState } from "react";

export const ReviewsContext = createContext();

const ReviewsContextProvider = (props) => {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setReview] = useState([]);

  const updateReviews = (reviews) => {
    setReviews(reviews);
  };

  const updateCurrentReview = (review) => {
    setReviews(review);
  };

  return (
    <ReviewsContext.Provider
      value={{ reviews, updateReviews, currentReview, updateCurrentReview }}
    >
      {props.children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContextProvider;
