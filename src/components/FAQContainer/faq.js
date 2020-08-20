import React, { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggle = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <dt>
        <button onClick={toggle}>
          <span style={{ fontSize: "10px", marginRight: "5px" }}>
            {showAnswer ? "▲" : "▼"}
          </span>
          {question}
        </button>
      </dt>
      <dd style={showAnswer ? { display: "block" } : { display: "none" }}>
        {answer}
      </dd>
    </>
  );
};

export default FAQ;
