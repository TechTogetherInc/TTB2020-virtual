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
          {question}
          <svg viewBox="0 0 24 24">
            {showAnswer ? (
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
            ) : (
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
            )}
          </svg>
        </button>
      </dt>
      <dd style={showAnswer ? { display: "block" } : { display: "none" }}>
        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
      </dd>
    </>
  );
};

export default FAQ;
