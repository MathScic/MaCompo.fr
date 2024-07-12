import React from "react";
import "./SavePopup.css";

const SavePopup = ({ players, onSave, onClose }) => {
  // Logique pour gérer la sauvegarde de la composition

  return (
    <div className="save-popup">
      <h2>Enregistrer la composition</h2>
      {/* Formulaires et champs pour saisir les informations de sauvegarde */}
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default SavePopup;
