import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Tactics from "./pages/myTactic/MyTactics";
import Save from "./components/save/SavePopup";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import TeamBuilder from "./components/teamBuilder/TeamBuilder";
import MyTactics from "./pages/myTactic/MyTactics";

const App = () => {
  return (
    <Router>
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team-builder" element={<TeamBuilder />} />
          <Route path="/tactics" element={<MyTactics />} />
          <Route path="/save" element={<Save />} />
          <Route />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
