import "./App.css";
import { useState } from "react";
import RateUs from "./components/RateUs";
import ThankYou from "./components/ThankYou";

function App() {
  const [rating, setRating] = useState(null);
  const [submit, setSubmit] = useState(false);

  return (
    <main className="container">
      {!submit ? (
        <RateUs
          // rating={rating}
          setRating={setRating}
          setSubmit={setSubmit}
        />
      ) : (
        <ThankYou rating={rating} />
      )}
    </main>
  );
}

export default App;
