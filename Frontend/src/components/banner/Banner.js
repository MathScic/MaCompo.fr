import React from "react";
import Navbar from "../navbar/Navbar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="image-container">
      <img src="../images/Logo.png" className="logo-banner" />
      <Navbar />
    </div>
  );
};

export default Banner;
