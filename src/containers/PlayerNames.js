import React, {useContext} from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import PlayerContext from "../PlayerContext";

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
  const { players, setPlayers } = useContext(PlayerContext);

  const setPlayerNames = (names) => {
    let tmpPlayers = players;

    for (let i = 0; i < tmpPlayers.length; i++) {
      tmpPlayers[i].name = names[i];
    }

    setPlayers(tmpPlayers);
  };

  return (
    <div className="d-flex flex-column">
      <h1>Player names?</h1>
      {
        players.map(player => (
          <div key={player.number}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id={`player${player.number}`}>Player {player.number}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Kalle Kula"
                aria-label="Name"
              />
            </InputGroup>
          </div>
        ))
      }

      <Button
        onClick={ () => {
            advanceStage();
            setPlayerNames(["Hjalmar", "xXxGöranxXx"])
          }
        }
      >Continue</Button>

    </div>
  )
};

export default PlayerNames;
