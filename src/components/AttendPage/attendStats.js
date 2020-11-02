import React from "react";

const stats = [
  { stat: "15+", description: "challenges to choose from" },
  { stat: "40+", description: "hours of hackathon" },
  { stat: "850+", description: "hackers" },
  { stat: "$6,000+", description: "in prizes" },
];
const AttendStats = () => {
  return (
    <div class="row display-container attendstats">
      {stats.map((stat) => (
        <div class="col-12 col-md-3 subcontainer">
          <div className="stat">{stat.stat}</div>
          <div className="stat-details">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

export default AttendStats;
