import React from "react";
import "./home.css";
import { Collection } from "../collection/Collection";
import { Slide } from "../slide/Slide";
import { RoadMap } from "../roadMap/roadMap";
import { Team } from "../team/Team";
import { Discord } from "../discord/Discord";
import { Footer } from "../footer/Footer";

export const Home = () => {
  return (
    <div>
      <section id="hero">
        <header className="container d-flex sr-top-slow">
          <div className="logo d-flex">
            <div className="picto"></div>
            <div className="typo">MekaVerse</div>
          </div>
          <div className="socialnav d-flex">
            <div className="link">
              <a href="https://twitter.com/MekaVerse" name="twitternav" rel="noopener" target="_blank" className="twitter d-flex"></a>
            </div>
            <div className="link">
              <a href="https://opensea.io/collection/mekaverse" name="openseanav" rel="noopener" target="_blank" className="opensea d-flex"></a>
            </div>
            <div className="link">
              <a href="https://discord.com/invite/mekaverse" name="discordnav" rel="noopener" target="_blank" className="discord d-flex"></a>
            </div>
            <div id="connect-btn" data-v-56bf2a75>
              <button className="wallet" data-v-56bf2a75>
                <span className="dot" data-v-56bf2a75></span>
                Connect Wallet
              </button>
            </div>
          </div>
        </header>
        <a className="hero-main-btn clickable" href="https://opensea.io/collection/mekaverse" target="_blank">
          <div className="element">
            <div className="text">View on Opensea</div>
          </div>
        </a>
        {/* animation */}
        <div>
          <video id="hero-video" tabIndex="0" playsInline preload="true">
            <source src="https://themekaverse.com/images/hero_mn.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <Collection />
      <Slide />
      <RoadMap />
      <Team />
      <Discord />
      <Footer />
    </div>
  );
};
