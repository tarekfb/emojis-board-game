import React from "react";

import Button from 'react-bootstrap/Button';

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

export default Actions;
