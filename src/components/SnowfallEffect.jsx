// src/components/SnowfallEffect.js
import React from "react";
import Snowfall from "react-snowfall";

const SnowfallEffect = () => (
  <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-25">
    <Snowfall snowflakeCount={150} />
  </div>
);

export default SnowfallEffect;
