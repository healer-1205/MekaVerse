import React from "react";
import "./roadMap.css";
import { Road01 } from "./road01";
import { Road02 } from "./road02";
import { Road03 } from "./road03";
import { Road04 } from "./road04";
import { Road05 } from "./road05";

export const RoadMap = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h2>Roadmap</h2>
        <p className="intro sr-top-fast-delayed">
          This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!
        </p>
        <div className="middle row relative">
          <div className="timeline column">
            <div className="line">
              <div className="progression"></div>
            </div>
            <Road01 />
            <Road02 />
            <Road03 />
            <Road04 />
            <Road05 />
          </div>
        </div>
      </div>
    </section>
  );
};