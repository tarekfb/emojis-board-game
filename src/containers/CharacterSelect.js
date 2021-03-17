import React from "react";

import Button from 'react-bootstrap/Button';

const emojis = [
  "🙃",
  "🥳",
  "🤯",
  "🥶",
  "🤑"
];

const CharacterSelect = ({ advanceStage, setCharacter }) => {

  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      <h1>{"Player 1"}, who are you?</h1>

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
      {/*    */}
      {/*    src={`./images/${pawn}-pawn.png`}/>*/}
      {/*  <img*/}
      {/*    src={`./images/${pawn}.png`}/>*/}
      {/*</div>*/}

      <Button onClick={advanceStage}>Continue</Button>
    </div>
  )
};

export default CharacterSelect;