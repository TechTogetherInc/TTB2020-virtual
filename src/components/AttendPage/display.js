import React from "react";
import Image from "../image";

const Display = ({ title, data }) => {
  return (
    <div className="display-container">
      <h1>{title}</h1>
      <div className="row">
        {data.map((element) => (
          <div className="col-12 col-md-3 subcontainer">
            <div>
              <Image alt="headshot" filename={element.image} />
            </div>
            <div className="title">{element.title}</div>
            <div className="description">{element.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
