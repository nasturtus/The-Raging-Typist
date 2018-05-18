import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-grid-container">
      <p className="intro-copy">
        The Raging Typist
      </p>
      <Link to="/raging-typist" className="landing-page-link">
        <button className="landing-page-button">Start Game</button>
      </Link>
    </div>
  );
};

export default LandingPage;
