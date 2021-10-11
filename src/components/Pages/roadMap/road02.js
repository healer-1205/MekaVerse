import React from "react";
import "./roadMap.css";

export const Road02 = () => {
  return (
    <div className="step d-flex margin-top">
      <div className="dot">
        <div className="shape"></div>
      </div>
      <div className="details">
        <div className="title d-flex">
          <div className="number degrade">.02</div>
          <h3>Physical Part</h3>
        </div>
        <p className="sr-right-fast-delayed">
          <span className="bold">
            Mekas have a huge potential as physical creations.
          </span>
          We are passionate about 3D printing and want to bring our concept to life with high-quality materials. After several talks with famous art toys makers, we are currently working on some concepts but wait, let’s keep a little mystery for the moment!
          <span className="bold">
            We also aim to create clothing and merchandise using high-quality materials and textiles with eco-friendly fabrics.
          </span>
          Also, Matt. B would love to explore a new and ambitious 3D Art Direction about streetwear and fashion in general. By following our design principles, we will do everything possible to create something amazing before, during, and after the launch of the first Drop!
        </p>
      </div>
    </div>
  );
};