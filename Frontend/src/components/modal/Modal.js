import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ onSave, onClose, editingTactic }) => {
  const [schema, setSchema] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (editingTactic) {
      setSchema(editingTactic.schema);
      setName(editingTactic.name);
      setComment(editingTactic.comment);
    }
  }, [editingTactic]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ schema, name, comment });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Enregistrer la Composition</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom de la composition :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Schéma de la composition :</label>
            <input
              type="text"
              value={schema}
              onChange={(e) => setSchema(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Commentaire :</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="modal-buttons">
            <button type="submit">Enregistrer</button>
            <button onClick={onClose}>Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
