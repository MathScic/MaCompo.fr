import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyTactic.css";

const MyTactic = () => {
  const [savedTactics, setSavedTactics] = useState([]);
  const [selectedTactic, setSelectedTactic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTacticsFromStorage =
      JSON.parse(localStorage.getItem("savedTactics")) || [];
    setSavedTactics(savedTacticsFromStorage);
  }, []);

  const handleEdit = (tactic) => {
    navigate("/team-builder", { state: { tactic } });
  };

  const handleDelete = (tacticId) => {
    const updatedTactics = savedTactics.filter(
      (tactic) => tactic.id !== tacticId
    );
    setSavedTactics(updatedTactics);
    localStorage.setItem("savedTactics", JSON.stringify(updatedTactics));
    setSelectedTactic(null);
  };

  return (
    <div className="my-tactic-container">
      <h2>Mes Tactiques</h2>
      <div className="tactic-cards">
        {savedTactics.length > 0 ? (
          savedTactics.map((tactic) => (
            <div
              key={tactic.id}
              className={`tactic-card ${
                selectedTactic === tactic.id ? "selected" : ""
              }`}
              onClick={() => setSelectedTactic(tactic.id)}
            >
              <div className="tactic-card-content">
                <div className="tactic-card-title">{tactic.name}</div>
                <div className="tactic-card-schema">
                  <strong>Schéma:</strong> {tactic.schema}
                </div>
              </div>
              {selectedTactic === tactic.id && (
                <div className="tactic-card-actions">
                  <button onClick={() => handleEdit(tactic)}>Modifier</button>
                  <button onClick={() => handleDelete(tactic.id)}>
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Aucune tactique enregistrée.</p>
        )}
      </div>
    </div>
  );
};

export default MyTactic;
