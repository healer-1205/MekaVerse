import React from "react";
import "./roadMap.css";

export const Road01 = () => {
  return (
    <div className="step d-flex done">
      <div className="dot">
        <div className="shape"></div>
      </div>
      <div className="details">
        <div className="title d-flex">
          <div className="number degrade">.01</div>
          <h3>Launch Roadmap</h3>
        </div>
        <p className="sr-right-fast-delayed">
          <span className="bold">
            Quality comes first. The goal is to make our first drop as cool as possible
          </span>
          so we can have freedom to develop the universe. We're still working on a number of rarity criteria, as well as a lot of new Lore concepts.
          <span className="bold">
            The drop release date will be announced as soon as the project's quality and technical aspects are fully progressed.
          </span>
          We also need to work hard with our community to make Discord and Twitter even cooler with new additions throughout time.
        </p>
      </div>
    </div>
  );
};