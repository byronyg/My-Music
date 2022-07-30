import React from "react";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="left">navbar goes here</div>
      <div className="right">
        <div className="topbar">topbar location here</div>
        <div className="artist">artist profile goes here</div>
        <div className="lower">
          <div className="genre">
            <div className="topartists">top artists section</div>
            <div className="chartsalot">
              <div className="genres">genres hapa deh</div>
              <div className="topcharts">top charts</div>
            </div>
          </div>
          <div className="player">player goes here</div>
        </div>
      </div>
    </div>
  );
}

export default App;
