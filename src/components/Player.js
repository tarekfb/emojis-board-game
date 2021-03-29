import React, {useContext} from "react";

import PlayerContext from "../helpers/PlayerContext";

const Player = () => {
  const { players } = useContext(PlayerContext);

  return (
    <div className="d-flex justify-content-between align-items-center w-50">
    {
      players.map(player => (
        <div key={player.number}>
          <p className="text-center" style={{ fontSize: "35px"}}>{player.name}</p>
          <p className="text-center" style={{ fontSize: "60px"}}>{player.character}</p>
        </div>
      ))
    }
    </div>
  )
};

export default Player;