"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-11-25");
const CountDown = () => {
  return (
    <div>
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={Date.now() + 10000 * 100}
      />
    </div>
  );
};

export default CountDown;
