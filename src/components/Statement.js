import React from "react";

const Statement = ({ header, message }) => {
  return (
    <div className="statement items-center">
      <h3 className="header">{header}</h3>
      <p>{message}</p>
    </div>
  );
};

export default Statement;
