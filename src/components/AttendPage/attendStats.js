import React from "react";

const stats = [
  { stat: "15+", description: "CHALLENGES TO CHOOSE FROM" },
  { stat: "40+", description: "HOURS OF HACKATHON" },
  { stat: "1,000+", description: "HACKERS" },
  { stat: "$6,000+", description: "IN PRIZES" },
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
