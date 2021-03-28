import React, {useContext, useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import PlayerContext from "../helpers/PlayerContext";

let emojis = [
  "🙃",
  "🥳",
  "🤯",
  "🥶",
  "🤑"
];

const Characters = ({ advanceStage }) => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [ currentPlayerSelect, setCurrentPlayerSelect ] = useState(1);
  const [ isCharClickedList, setIsCharClickedList ] = useState({});

  useEffect(() => {

    // Useeffect runs before the variable emojis is initialized
    emojis = [
      "🙃",
      "🥳",
      "🤯",
      "🥶",
      "🤑"
    ];

    let charState = {};
    emojis.forEach(char => {
      charState[char] = false;
    });
    setIsCharClickedList(charState);
  }, []) ;

  const setCharacter = (character) => {
    // Set character
    if (!players.find(player => player.character === character)){
      let tmpPlayers = players;

      tmpPlayers.forEach(player => {
        if (player.number === currentPlayerSelect)
          player.character = character;
      });

      setPlayers(tmpPlayers);
      setCurrentPlayerSelect(currentPlayerSelect + 1);

      // Set state: is character selected?
      let tmpObj = isCharClickedList;
      tmpObj[character] = true;
      setIsCharClickedList(tmpObj);

      // Advance game
      if (currentPlayerSelect === players.length){
        advanceStage();
      }
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
              <div
                className={isCharClickedList[emoji] ? 'selected' : null}
                key={emoji}
                onClick={() => setCharacter(emoji)}
                style={
                  {fontSize: "75px", cursor: "pointer"}
                }
              >{emoji}</div>
          ))
        }
      </div>
    </div>
  )
};

export default Characters;