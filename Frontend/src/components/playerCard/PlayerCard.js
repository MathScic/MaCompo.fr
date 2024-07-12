import React from "react";
import Draggable from "react-draggable";
import "./PlayerCard.css";

const PlayerCard = ({ player, onDelete, onDragStop }) => {
  return (
    <Draggable
      defaultPosition={{ x: player.coords.x, y: player.coords.y }}
      onStop={(e, data) => onDragStop(player.id, { x: data.x, y: data.y })}
    >
      <div className="player-card">
        <div className="player-circle">{player.number}</div>
        <div className="player-info">
          <div className="player-name">{player.name}</div>
          <div className="player-position">{player.position}</div>
        </div>
        <button className="delete-button" onClick={() => onDelete(player.id)}>
          ×
        </button>
      </div>
    </Draggable>
  );
};

export default PlayerCard;
