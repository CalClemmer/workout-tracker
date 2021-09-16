import React, { useState } from "react";

function Plank(props) {
  const [state, setState] = useState({
    sets: 0,
  });

  const increase = () => {
    setState({
      sets: state.sets + 1,
    });
  };

  const clear = () => {
    setState({
      sets: 0,
    });
  };
  return (
    <div className="exercise">
      <h2>Plank Press</h2>
      <h4>You have done {state.sets} sets</h4>
      <button onClick={increase}>Add a Set</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Plank;
