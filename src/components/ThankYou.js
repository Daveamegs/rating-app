import React from "react";
import Statement from "./Statement";
import ThankImage from "./ThankImage";
import data from "../data";

const ThankYou = ({rating}) => {
  const thankU = data.data[1];
  return (
    <div className="card items-center">
      <ThankImage rating={rating} />
      <Statement header={thankU.header} message={thankU.message} />
    </div>
  );
};

export default ThankYou;
