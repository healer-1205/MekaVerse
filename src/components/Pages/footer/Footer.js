import React from "react";
import "./footer.css";

export const Footer = () => {
  return(
    <footer>
      <div className="container d-flex">
        <div className="infos column sr-top-fast">
          <div className="blockmark column">
            <div className="logo d-flex">
              <div className="picto"></div>
              <div className="typo">MekaVerse</div>
            </div>
            <p className="baseline">
              8,888 unique mekas who need drivers.
            </p>
          </div>
          <p className="copyright">©2021 MekaVerse. All rights reserved.</p>
        </div>
        <div className="right column sr-top-fast-delayed">
          <div className="nav column">
            <a aria-current="page" href="/" className="router-link-active router-link-exact-active">Home</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="https://etherscan.io/address/0x9A534628B4062E123cE7Ee2222ec20B86e16Ca8F#code" rel="noopener" target="_blank">Smart Contract</a>
          </div>
          <div className="social d-flex">
            <div className="link">
              <a href="https://twitter.com/MekaVerse" name="twitter" rel="noopener" target="_blank" className="twitter d-flex"></a>
            </div>
            <div className="link">
              <a href="https://opensea.io/collection/mekaverse" name="opensea" rel="noopener" className="opensea d-flex"></a>
            </div>
            <div className="link" style={{marginRight: "0px"}}>
              <a href="https://discord.com/invite/mekaverse" name="discord" rel="noopener" target="_blank" className="discord d-flex"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};