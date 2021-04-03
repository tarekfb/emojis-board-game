import React, {useContext} from "react";

import PlayerContext from "../Contexts/PlayerContext";

const Player = () => {
  const { players } = useContext(PlayerContext);

  return (
    <div className="d-flex justify-content-between align-items-center w-50 text-center">
    {
      players.map(player => (
        <div key={player.number} className="d-flex justify-content-center flex-column text-center align-items-center mb-3">
          <span className="text-center" style={{ fontSize: "20px"}}>{player.name}</span>
          <span className="text-center" style={{ fontSize: "40px"}}>{player.character}</span>
        </div>
      ))
    }
    </div>
  )
};

export default Player;