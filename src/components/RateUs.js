import React from "react";
import Star from "./Star";
import Statement from "./Statement";
import Rating from "./Rating";
import Data from "../data";

const RateUs = (props) => {
  const rateUsNow = Data.data[0];
  return (
    <div className="card">
      <Star />
      <Statement header={rateUsNow.header} message={rateUsNow.message} />
      <Rating
        // rating={props.rating}
        setRating={props.setRating}
        setSubmit={props.setSubmit}
      />
    </div>
  );
};

export default RateUs;
