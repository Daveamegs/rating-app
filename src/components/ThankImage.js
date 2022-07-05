import React from "react";
import ThankYouImage from "../images/illustration-thank-you.svg";

const ThankImage = ({ rating }) => {
  return (
    <div>
      <img src={ThankYouImage} alt="Thank You" />
      <p className="selected--text">You selected {rating} out of 5</p>
    </div>
  );
};

export default ThankImage;
