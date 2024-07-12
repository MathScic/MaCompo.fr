import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Field from "../field/Field";
import PlayerForm from "../playerForm/PlayerForm";
import Modal from "../modal/Modal";
import Tactics from "../tactics/Tactics";
import "./TeamBuilder.css";

const TeamBuilder = () => {
  const [players, setPlayers] = useState([]);
  const [savedTactics, setSavedTactics] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingPlayerId, setEditingPlayerId] = useState(null); // État pour l'édition du joueur
  const [editingTacticId, setEditingTacticId] = useState(null); // État pour l'édition de la tactique

  const addOrUpdatePlayer = (newPlayer) => {
    if (editingPlayerId) {
      const updatedPlayers = players.map((player) =>
        player.id === editingPlayerId
          ? { ...newPlayer, id: editingPlayerId }
          : player
      );
      setPlayers(updatedPlayers);
      setEditingPlayerId(null);
    } else {
      setPlayers([...players, { ...newPlayer, id: uuidv4() }]);
    }
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  const saveTactics = ({ id, schema, name, comment }) => {
    const tactic = {
      id: id || uuidv4(),
      schema,
      name,
      comment,
      players: [...players],
    };
    if (id) {
      const updatedTactics = savedTactics.map((t) =>
        t.id === id ? tactic : t
      );
      setSavedTactics(updatedTactics);
    } else {
      setSavedTactics([...savedTactics, tactic]);
    }
    localStorage.setItem("savedTactics", JSON.stringify(savedTactics));
    setPlayers([]);
    setShowModal(false);
  };

  const deleteTactic = (tacticId) => {
    const updatedTactics = savedTactics.filter(
      (tactic) => tactic.id !== tacticId
    );
    setSavedTactics(updatedTactics);
    localStorage.setItem("savedTactics", JSON.stringify(updatedTactics));
  };

  const editTactic = (tactic) => {
    setEditingTacticId(tactic.id);
    setPlayers(tactic.players);
    setShowModal(true);
  };

  return (
    <div className="team-builder-container">
      <div className="container-wrapper">
        <div className="field-container">
          <Field
            players={players}
            onUpdatePlayerPosition={(id, coords) =>
              setPlayers(
                players.map((player) =>
                  player.id === id ? { ...player, coords } : player
                )
              )
            }
            onDeletePlayer={deletePlayer}
            onEditPlayer={setEditingPlayerId}
          />
        </div>
        <div className="form-container">
          <PlayerForm
            players={players}
            onAddOrUpdatePlayer={addOrUpdatePlayer}
            editingPlayerId={editingPlayerId}
          />
          <button onClick={() => setShowModal(true)}>Sauvegarder</button>
        </div>
      </div>
      {showModal && (
        <Modal
          editingTactic={savedTactics.find(
            (tactic) => tactic.id === editingTacticId
          )}
          onSave={saveTactics}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="tactics-container">
        <Tactics
          savedTactics={savedTactics}
          onDelete={deleteTactic}
          onEdit={editTactic}
        />
      </div>
    </div>
  );
};

export default TeamBuilder;
