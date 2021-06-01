import React from "react";

import Button from 'react-bootstrap/Button';

const Lobby = ({ advanceStage }) => {
  
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>This is the lobby.</h1>
        <h2>It's under construction.</h2>
        <h3>Anyway, do you want to get started?</h3>
        <Button className="mt-3 w-25" onClick={advanceStage}>Yes</Button>
        
    </div>
  )
};

export default Lobby;
