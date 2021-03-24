import React, {useContext, useState} from "react";

import Button from 'react-bootstrap/Button';
import PlayerContext from "../PlayerContext";

const emojis = [
  "🙃",
  "🥳",
  "🤯",
  "🥶",
  "🤑"
];

const Characters = ({ advanceStage }) => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [currentPlayerSelect, setCurrentPlayerSelect] = useState(1);

  const setCharacter = (character) => {

    if (players.find(player => player.character === character))
      alert("No.");
    else {
      let tmpPlayers = players;

      tmpPlayers.forEach(player => {
        if (player.number === currentPlayerSelect)
          player.character = character;
          console.log(player.character)
      });

      setPlayers(tmpPlayers);
      setCurrentPlayerSelect(currentPlayerSelect + 1);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      {
        players.map(player => (
          player.number === currentPlayerSelect ?
            <h1 key={player.number}>{player.name}, choose your emoji!</h1> :
            null
        ))
      }
      <div className="container d-flex flex-row mb-3">
        {
          emojis.map(emoji => (
              <div key={emoji} onClick={() => setCharacter(emoji)} style={{fontSize: "75px", cursor: "pointer"}}>{emoji}</div>
          ))
        }
      </div>
      {
        currentPlayerSelect > players.length ? <Button onClick={advanceStage}>Continue</Button> : null
      }
    </div>
  )
};

export default Characters;