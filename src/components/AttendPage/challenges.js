import React from "react";
import Display from "./display";
import challengesData from "../../data/challenges.json";

const Challenges = () => {
  return <Display data={challengesData} title={"Challenges"} />;
};

export default Challenges;
