import React from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

/*
  In the future, this needs to generate # of input depending on # of players
  remember to change id of InputGroup.Text to player_i
 */

/* LOGIC IN PREVIOUS PROJECT FOR ITERATING THROUGH PLAYERS
<h1>Player names?</h1>
  <form>
    {
      this.state.players.map(player => (
        <div
          className="name-selection-row"
          key={player.number}>
          <label>Name: </label>
          <input
            value={this.state.players[player.number - 1].nameInputValue}
            onChange={evt => this.updateNameInputValue(evt, player.number)}
            type="text"/>
        </div>
      ))
    }
  </form>
 */

const PlayerNames = ({ advanceStage }) => {
  return (
    <div className="d-flex flex-column">
      <h1>Player names?</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="player_1">Player 1</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Kalle Kula"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button onClick={advanceStage}>Continue</Button>
    </div>
  )
};

export default PlayerNames;
