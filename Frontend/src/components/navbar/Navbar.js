import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="banner">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/team-builder">Ma Composition</NavLink>
        </li>
        <li>
          <NavLink to="/tactics">Mes Tactiques</NavLink>
        </li>
        {/* <li>
          <NavLink to="/save">Sauvegarder</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
