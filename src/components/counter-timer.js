import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("11/08/2020 16:00:00").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div class="w-100 counter-container">
      <div class="container">
        <div class="row counter-line">
          <div class="col-sm text-center counter-row">
            <p className="time border rounded">{state.days || "0"}</p>
            <p className="time-text">Days</p>
          </div>
          <div class="col-sm text-center counter-row time">:</div>
          <div class="col-sm text-center counter-row">
            <p className="time border rounded">{state.hours || "00"} </p>
            <p className="time-text">Hours</p>
          </div>
          <div class="col-sm text-center counter-row time">:</div>
          <div class="col-sm text-center counter-row">
            <p className="time border rounded">{state.minutes || "00"} </p>
            <p className="time-text">Minutes</p>
          </div>
          <div class="col-sm text-center counter-row time">:</div>
          <div class="col-sm text-center counter-row">
            <p className="time border rounded">{state.seconds || "00"} </p>
            <p className="time-text">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
