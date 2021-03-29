import React from "react";

import Button from 'react-bootstrap/Button';

// amount of actions should be decided based on # of players?
// for example, 10 * nbr of players = nbr of actions

const actionBase = {
  1: `Drink ${getRandomInt(5)}`,
  2: `Give ${getRandomInt(5)}`,
  3: `Drink ${getRandomInt(5)}`,
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Actions = ({ advanceStage, actions, setActions }) => {
  const setCustomActions = () => {
    alert("Custom questions isn't implemented yet");
    advanceStage();
  };

  return (
    <div className="d-flex flex-column">
      <h1 className="mb-5">Default questions?</h1>
      <div className="container d-flex flex-row justify-content-around">
        <Button className="w-25" onClick={advanceStage}>Yes</Button>
        <Button className="w-25" onClick={setCustomActions}>No</Button>
      </div>
    </div>
  )
};

export { Actions, actionBase };
