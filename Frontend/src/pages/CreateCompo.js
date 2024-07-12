import React from "react";
import TeamBuilder from "../components/teamBuilder/TeamBuilder";

const CreateCompo = ({ onSaveComposition }) => {
  return (
    <div>
      <h2>Create Your Composition</h2>
      <TeamBuilder onSaveComposition={onSaveComposition} />
    </div>
  );
};

export default CreateCompo;
