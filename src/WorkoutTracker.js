import React from "react";
import Chestpress from "./Chestpress.js";
import Legpress from "./Legpress.js";
import Plank from "./Plank.js";

function WorkoutTracker(props) {
  return (
    <div className="exercises">
      <Chestpress />
      <Legpress />
      <Plank />
    </div>
  );
}

export default WorkoutTracker;
