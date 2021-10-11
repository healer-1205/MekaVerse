import React from "react";
import "./roadMap.css";

export const Road04 = () => {
  return (
    <div className="step d-flex margin-top">
      <div className="dot">
        <div className="shape"></div>
      </div>
      <div className="details">
        <div className="title d-flex">
          <div className="number degrade">.04</div>
          <h3>Meka Multiverse</h3>
        </div>
        <p className="sr-right-fast-delayed">
          After presenting our original Mekas, we want to explore 
          <span className="bold">
            more abstract subjects in order to present a second, very distinct drop.
          </span>
          Our aim is simply to aesthetically enlarge the universe, and each relationship between the Meka Dimensions will be described and explained. We truly want to blend artistic disciplines, as well as move beyond our graphic style and look outside our comfort zone. We also want to see if it would be possible to 
          <span className="bold">
            collaborate with famous mecha licenses
          </span>
          on future releases. That would be incredible! 
        </p>
      </div>
    </div>
  );
};