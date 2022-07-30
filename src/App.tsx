import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="wrapper">
      <div className="left">
        <NavigationBar />
      </div>
      <div className="right">
        <div className="topbar">
          <TopBar />
        </div>
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
