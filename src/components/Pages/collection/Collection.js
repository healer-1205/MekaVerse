import React from "react";
import "./collection.css";

export const Collection = () => {
  return (
    <>
      <section id="presentation" className="container d-flex">
        <div className="description sr-top-fast">
          <h2>
            <div className="degrade">8,888 unique Mekas</div>
            who need Drivers. 
          </h2>
          <p>
            The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.
          </p>
          <p>
          Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.
          </p>
        </div>
        <div className="examples sr-top-fast-delayed">
          <video className="various" tabIndex="0" preload="true" autoPlay loop muted>
            <source src="https://themekaverse.com/images/various.mp4"></source>
          </video>
        </div>
      </section>
    </>
  );
};