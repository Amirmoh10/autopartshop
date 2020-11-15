import React from "react";
import Opel from "./opel";
import LandRover from "./landRover";
import Ford from "./ford";
import Volkswagen from "./volkswagen";

function Homepage() {
  return (
    <div className="home">
      <div className="titleBox">
        <p className="primaryTtile">Find Parts For Your Vehicle</p>
        <p className="secondaryTtile">Original And Reliable Auto parts </p>
      </div>
      <div className="brands-container">
        <div className="upper-brands">
          <Opel />
          <Ford />
        </div>
        <div className="lower-brands">
          <Volkswagen />
          <LandRover />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
