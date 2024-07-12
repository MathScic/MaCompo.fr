import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const PlayerForm = ({ players = [], onAddOrUpdatePlayer, editingPlayerId }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState("");
  const [editingPlayer, setEditingPlayer] = useState(null);

  // Effet pour pré-remplir les données du joueur en cours d'édition
  useEffect(() => {
    if (editingPlayerId) {
      const playerToEdit = players.find(
        (player) => player.id === editingPlayerId
      );
      if (playerToEdit) {
        setEditingPlayer(playerToEdit);
        setName(playerToEdit.name);
        setPosition(playerToEdit.position);
        setNumber(playerToEdit.number);
      }
    } else {
      setEditingPlayer(null);
      setName("");
      setPosition("");
      setNumber("");
    }
  }, [editingPlayerId, players]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlayer = {
      id: editingPlayer ? editingPlayer.id : uuidv4(), // Utiliser l'ID existant ou en créer un nouveau
      name,
      position,
      number,
      coords: { x: 0, y: 0 },
    };
    onAddOrUpdatePlayer(newPlayer); // Appel à la fonction onAddOrUpdatePlayer pour ajouter ou mettre à jour le joueur
    setName("");
    setPosition("");
    setNumber("");
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <div>
        <label>Nom : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Poste : </label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Numéro : </label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">
        {editingPlayer ? "Modifier joueur" : "Ajouter joueur"}
      </button>
      <div className="effectif-list">
        <h3>Effectif :</h3>
        {players &&
          players.map((player) => (
            <div key={player.id} className="deleted-button-list">
              <p>
                {player.number}. {player.name}, {player.position}
              </p>
            </div>
          ))}
      </div>
    </form>
  );
};

export default PlayerForm;
