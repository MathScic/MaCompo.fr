import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const [editingPlayerId, setEditingPlayerId] = useState(null);
  const location = useLocation();
  const editingTactic = location.state?.tactic || null;

  useEffect(() => {
    if (editingTactic) {
      setPlayers(editingTactic.players || []);
    }
  }, [editingTactic]);

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

  const saveTactics = ({ schema, name, comment }) => {
    const tactic = {
      id: editingTactic ? editingTactic.id : uuidv4(),
      schema,
      name,
      comment,
      players: [...players],
    };

    const updatedTactics = editingTactic
      ? savedTactics.map((t) => (t.id === tactic.id ? tactic : t))
      : [...savedTactics, tactic];

    setSavedTactics(updatedTactics);
    localStorage.setItem("savedTactics", JSON.stringify(updatedTactics));
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

  const updatePlayerPosition = (id, coords) => {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, coords } : player
      )
    );
  };

  return (
    <div className="team-builder-container">
      <div className="container-wrapper">
        <div className="field-container">
          <Field
            players={players}
            onUpdatePlayerPosition={updatePlayerPosition}
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
          onSave={saveTactics}
          onClose={() => setShowModal(false)}
          editingTactic={editingTactic}
        />
      )}
      <div className="tactics-container">
        <Tactics savedTactics={savedTactics} onDelete={deleteTactic} />
      </div>
    </div>
  );
};

export default TeamBuilder;
