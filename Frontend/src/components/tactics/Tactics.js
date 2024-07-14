import React from "react";
import "./Tactics.css";

const Tactics = ({ savedTactics, onDelete, onEdit }) => {
  return (
    <div className="tactics-container">
      <h2>Mes Tactiques</h2>
      <table className="tactics-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Schéma</th>
            <th>Commentaire</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedTactics.map((tactic) => (
            <tr key={tactic.id}>
              <td>{tactic.name}</td>
              <td>{tactic.schema}</td>
              <td>{tactic.comment}</td>
              <td>
                <button className="edit-button" onClick={() => onEdit(tactic)}>
                  Modifier
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(tactic.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tactics;
