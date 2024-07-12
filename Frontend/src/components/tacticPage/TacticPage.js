import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TeamBuilder from "../teamBuilder/TeamBuilder";
import Tactics from "../tactics/Tactics";

const TacticsPage = () => {
  const [savedTactics, setSavedTactics] = useState([]);

  const saveTactic = ({ schema, name, comment, players }) => {
    const tactic = {
      id: Math.random().toString(36).substr(2, 9),
      schema,
      name,
      comment,
      players,
    };
    setSavedTactics([...savedTactics, tactic]);
    if (!schema || !name || !comment) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
  };

  const deleteTactic = (tacticId) => {
    setSavedTactics(savedTactics.filter((tactic) => tactic.id !== tacticId));
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Tactics savedTactics={savedTactics} onDelete={deleteTactic} />
          }
        />
        <Route
          path="/team-builder"
          element={<TeamBuilder onSave={saveTactic} />}
        />
      </Routes>
    </div>
  );
};

export default TacticsPage;
