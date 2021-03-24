import React, {useContext} from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import PlayerContext from "../PlayerContext";

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
            setPlayerNames(["Hjalmar", "xXxGöranxXx"]);
          }
        }
      >Continue</Button>

    </div>
  )
};

export default PlayerNames;
