import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tactics from "./pages/Tactics";
import Save from "./components/save/SavePopup";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import TeamBuilder from "./components/teamBuilder/TeamBuilder";
import CreateCompo from "./pages/CreateCompo";
import TacticsPage from "./components/tacticPage/TacticPage";

const App = () => {
  return (
    <Router>
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCompo />} />
          <Route path="/team-builder" element={<TeamBuilder />} />
          {/* <Route path="/tactics" element={<TacticsPage />} />
          <Route path="/save" element={<Save />} /> */}
          <Route />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
