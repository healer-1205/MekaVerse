import React from "react";
import "./discord.css";

export const Discord = () => {
  return (
    <section id="discord">
      <div className="container">
        <h2 className="sr-top-fast">Join the community</h2>
        <p className="sr-top-fast-delayed">
          MekaVerse Discord already has over 150,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.
        </p>
        <div className="sr-top-more-delayed">
          <a href="https://discord.com/invite/mekaverse" rel="noopener" target="_blank" className="cta">Join our Discord</a>
        </div>
        <div className="meka sr-bottom-more-delayed"></div>
      </div>
    </section>
  );
};