import React from "react";
import "./roadMap.css";

export const Road05 = () => {
  return (
    <div className="step d-flex margin-top" style={{marginBottom: "100px"}}>
      <div className="dot">
        <div className="shape"></div>
      </div>
      <div className="details">
        <div className="title d-flex">
          <div className="number degrade">.05</div>
          <h3>Future of Mekas</h3>
        </div>
        <p className="sr-right-fast-delayed">
          When all of these stages are completed, 
          <span className="bold">
            we’ll take care of maintaining the Meka Universe
          </span>
          . We both come from the design industry, and we are truly passionate about Art, Short films, Physical and Digital Exploration, and we would like to explore even more, with the desire to always make events more impressive and ambitious. We are counting on your support! We look forward to seeing what happens in the future! Love from Mekas 
          <span className="bold">
            ♥
          </span>
          Also, Matt. B would love to explore a new and ambitious 3D Art Direction about streetwear and fashion in general. By following our design principles, we will do everything possible to create something amazing before, during, and after the launch of the first Drop!
        </p>
      </div>
    </div>
  );
};