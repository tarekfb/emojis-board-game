import React from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const NumberOfPlayers = ({ advanceStage }) => {
  return (
    <div className="d-flex flex-column">
      <h1>How many players?</h1>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="For example: &quot;3&quot; "
          aria-label="number of players"
        />
      </InputGroup>

      <Button onClick={advanceStage}>Continue</Button>
    </div>
  )
};

export default NumberOfPlayers;