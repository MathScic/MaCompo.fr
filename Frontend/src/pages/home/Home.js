import React from "react";
import "../home/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue sur MaCompo.fr !</h1>
      <p>Créez et gérez vos composition d'équipe facilement et éfficacement.</p>
      <p>Explorez nos fonctionnalités :</p>
      <ul>
        <li>Création de composition personalisées</li>
        <li>Gestion des tactiques et des positions</li>
        <li>Sauvegard et partage de vos compositions</li>
      </ul>
    </div>
  );
};

export default Home;
