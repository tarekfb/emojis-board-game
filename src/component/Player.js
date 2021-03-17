import React, {useContext} from "react";

import PlayerContext from "../PlayerContext";

const Player = () => {
  const { players } = useContext(PlayerContext);

  return (
    <div className="d-flex flex-row justify-content-between">
    {
      players.map(player => (
        <div key={player.number} className="player">
          <p>{player.number}</p>
          <p>{player.name}</p>
          <p>{player.character}</p>
        </div>
      ))
    }
    </div>

  )
};

export default Player;