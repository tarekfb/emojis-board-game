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

const CharacterSelect = ({ advanceStage }) => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [currentPlayerSelect, setCurrentPlayerSelect] = useState(1);

  // const setPlayerCharacter = (character) => {
  //   let tmpPlayers = players;
  //
  //   for (let i = 0; i < tmpPlayers.length; i++) {
  //     tmpPlayers[i].name = names[i];
  //   }
  //
  //   setPlayers(tmpPlayers);
  // };

  const setCharacter = (character) => {

    if (players.find(player => player.character === character))
      alert("No.");
    else {
      let tmpPlayers = players;

      tmpPlayers.forEach(player => {
        if (player.number === currentPlayerSelect)
          player.character = character;
      });

      setPlayers(tmpPlayers);
    }

    setCurrentPlayerSelect(currentPlayerSelect + 1);

      // this.setState((prevState) => ({
      //   currentPlayerSelect: prevState.currentPlayerSelect + 1,
      //   players: [
      //     ...prevState.players, {
      //       number: prevState.currentPlayerSelect,
      //       pawn,
      //     }
      //   ],
      //   showSetPlayerNames: false,
      //   readyToStart: prevState.currentPlayerSelect === 2 ? true : false,
      // }));

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

      {/*<div*/}
      {/*  className="container"*/}
      {/*  onClick={() => setCharacter(character)}>*/}
      {/*  <div>*/}

      {/*    src={`./images/${pawn}-pawn.png`}/>*/}
      {/*  <img*/}
      {/*    src={`./images/${pawn}.png`}/>*/}
      {/*</div>*/}

      <Button onClick={advanceStage}>Continue</Button>
    </div>
  )
};

export default CharacterSelect;