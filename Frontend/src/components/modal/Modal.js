import React, { useState, useEffect } from "react";
import "./Modal.css";

// Étape 1 : Collection d'images libres de droits
const footballImages = [
  "https://source.unsplash.com/1600x900/?football",
  "https://source.unsplash.com/1600x900/?soccer",
  "https://source.unsplash.com/1600x900/?football-game",
  "https://source.unsplash.com/1600x900/?football-field",
  "https://source.unsplash.com/1600x900/?soccer-match",
];

const Modal = ({ onSave, onClose, editingTactic }) => {
  const [schema, setSchema] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editingTactic) {
      setSchema(editingTactic.schema);
      setName(editingTactic.name);
      setComment(editingTactic.comment);
      setImage(editingTactic.image);
    }
  }, [editingTactic]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      const selectedImage =
        reader.result ||
        footballImages[Math.floor(Math.random() * footballImages.length)];
      onSave({ schema, name, comment, image: selectedImage });
    };
    if (image) {
      reader.readAsDataURL(image);
    } else {
      onSave({
        schema,
        name,
        comment,
        image:
          footballImages[Math.floor(Math.random() * footballImages.length)],
      });
    }
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
          <div>
            <label>Image :</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
