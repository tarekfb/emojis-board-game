import React, {useContext} from "react";

import Button from 'react-bootstrap/Button';
import PlayerContext from "../PlayerContext";

const Actions = ({ advanceStage }) => {

  const setActions = (boolean) => {

  };

  return (
    <div className="d-flex flex-column">
      <h1>Default questions?</h1>
      <div className="container d-flex flex-row justify-content-around">
        <Button className="w-25" onClick={() => setActions(true)}>Yes</Button>
        <Button className="w-25" onClick={() => setActions(false)}>No</Button>
      </div>
    </div>
  )
};

export default Actions;
