import React from "react";
import Draggable from "react-draggable";
import "./Field.css";

const Field = ({ players, onDeletePlayer, onUpdatePlayerPosition }) => {
  return (
    <div className="field">
      {players.map((player) => (
        <Draggable
          key={player.id}
          position={{ x: player.coords.x, y: player.coords.y }}
          onStop={(e, data) =>
            onUpdatePlayerPosition(player.id, { x: data.x, y: data.y })
          }
        >
          <div className="player-container">
            <div className="player-circle">
              {player.number}
              <button
                className="delete-button"
                onClick={() => onDeletePlayer(player.id)}
              >
                X
              </button>
            </div>
            <div className="player-info">
              <span className="player-name">{player.name}</span>
              <br />
              <span className="player-position">{player.position}</span>
            </div>
          </div>
        </Draggable>
      ))}
      <img
        className="football-field"
        src="../images/terrain-de-football.png"
        alt="Terrain de football"
      />
    </div>
  );
};

export default Field;
