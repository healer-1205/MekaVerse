import React from "react";
import "./roadMap.css";

export const Road03 = () => {
  return (
    <div className="step d-flex margin-top">
      <div className="dot">
        <div className="shape"></div>
      </div>
      <div className="details">
        <div className="title d-flex">
          <div className="number degrade">.03</div>
          <h3>MekaVerse x Artists </h3>
        </div>
        <p className="sr-right-fast-delayed">
          We know a lot of artists in the NFT community and beyond!
          <span className="bold">
            We'd like to develop a series in which each Meka is made in collaboration with artists we like and under their artistic direction.
          </span>
          We would create a small collection of 1/1 unique Mekas by artists, with all proceeds going to them! This collection is incredibly important to us, and we are excited to see what we can accomplish together!
        </p>
      </div>
    </div>
  );
};