import { useState } from "react";

const Rating = ({ setRating, setSubmit }) => {
  // const [rating, setRating] = useState([]);
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setRating(event.target.value);
    setActive(event.target.id);

    console.log(event.target);
  };

  const handleSubmit = () => {
    setSubmit((prevState) => !prevState);
    // console.log("From Submit: " + rating);
  };

  // console.log(rating);
  console.log(active);

  return (
    <div>
      <div className="rate-nums">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <input
              type="button"
              name="rate"
              value={ratingValue}
              key={index}
              id={index}
              onClick={handleClick}
              className={active === index.toString() ? "active" : ""}
            />
          );
        })}
      </div>
      <button type="submit" className="btn-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
