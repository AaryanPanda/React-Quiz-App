import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div id="home">
      <h1>Quiz App</h1>
      <button id="play">
        <Link to="/quiz">Play</Link>
      </button>
    </div>
  );
}

export default Home;
