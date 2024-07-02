import React from 'react';

const WeatherWindDirection = ({ direction }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${direction}deg)` }}
    >
      <path
        d="M12 23L5 10H10V1H14V10H19L12 23Z"
        fill="black"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WeatherWindDirection;
