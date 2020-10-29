import React from "react";
import Display from "./display";
import prizesData from "../../data/prizes.json";

const Prizes = () => {
  return <Display data={prizesData} title={"Prizes"} />;
};

export default Prizes;
