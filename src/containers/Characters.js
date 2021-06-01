import React, {useContext, useEffect, useState} from "react";

import PlayerContext from "../Contexts/PlayerContext";
import { fetchCharacterList } from "../helpers/Characters";

const Characters = ({ advanceStage }) => {
  const { players, setPlayers, currentPlayer, setCurrentPlayer } = useContext(PlayerContext);
  const [ isCharClickedList, setIsCharClickedList ] = useState({});
  const [ characters ]  = useState(fetchCharacterList(players.length - 1));

  useEffect(() => {
    let charState = {};
    characters.forEach(char => {
      charState[char] = false;
    });
    setIsCharClickedList(charState);
  }, []) ;

  const setCharacter = (character) => {
    // Set character
    if (!players.find(player => player.character === character)){
      let tmpPlayers = players;

      tmpPlayers.forEach(player => {
        if (player.number === currentPlayer)
          player.character = character;
      });

      setPlayers(tmpPlayers);
      setCurrentPlayer(currentPlayer + 1);

      // Set state: is character selected?
      let tmpObj = isCharClickedList;
      tmpObj[character] = true;
      setIsCharClickedList(tmpObj);

      // Advance game
      if (currentPlayer === players.length){
        advanceStage();
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      {
        players.map(player => (
          player.number === currentPlayer ?
            <h1 key={player.number}>{player.name}, choose your emoji!</h1> :
            null
        ))
      }
      <div className="d-flex justify-content-between align-items-center mb-3">
        {
          characters.map(emoji => (
              <div  
                className={isCharClickedList[emoji] ? 'selected mr-3' : "mr-3"}
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