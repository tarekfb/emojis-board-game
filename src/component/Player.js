import React, {useContext} from "react";

import PlayerContext from "../PlayerContext";

const Player = () => {
  const { players } = useContext(PlayerContext);

  return (
    <div className="players">
    {
      players.map(player => (
        <div key={player.number} className="player">
          <p>{player.name}</p>

        </div>
      ))
    }
    </div>

  )
};

export default Player;