import React from "react";
import faqData from "../../data/faq.json";
import FAQ from "./faq";
import "./faq.scss";

const FAQContainer = () => {
  return (
    <div className="faq-container">
      <h1>FAQ Questions</h1>
      <dl>
        {faqData.map((data) => (
          <FAQ
            question={data.question}
            answer={data.answer}
            key={data.question}
          />
        ))}
      </dl>
    </div>
  );
};

export default FAQContainer;
