import React from "react";
import "./index.css";

import { logoSinFondo } from "../../Provider";

export default function Footer() {
  return (
    <div>
      <div className="contact-footer d-flex">
        <img src={logoSinFondo} alt="footer" className="logo" />
        <div className="mr-10 footer-container">
          <p>E-mail:</p>
          <li className="d-flex responsive-li">
            <ul className="responsive-ul" style={{ padding: 0 }}>
              <a
                className="d-flex mail-text"
                href="mailto:contacto@rareproductora.com"
              >
                contacto@rareproductora.com
              </a>
            </ul>
          </li>
        </div>
        <div className="mr-10 footer-container">
          <p>Síguenos:</p>
          <div className="footer-links">
            <li className="d-flex responsive-li">
              <ul className="responsive-ul" style={{ padding: 0 }}>
                <a href="https://www.facebook.com/AMDRedLeague" target="__blank" className="links-ul">
                  Facebook
                </a>
              </ul>
              <ul className="responsive-ul" style={{ padding: 0 }}>
                <a href="https://twitter.com/AMD_RedLeague" target="__blank">
                  Twitter
                </a>
              </ul>
            </li>
            <li className="d-flex responsive-li">
              <ul className="responsive-ul" style={{ padding: 0 }}>
                <a href="https://www.instagram.com/amdredleague/" target="__blank">
                  Instagram
                </a>
              </ul>
              <ul className="responsive-ul" style={{ padding: 0 }}>
                <a href="https://www.twitch.tv/amd_latam" target="__blank">
                  Twitch
                </a>
              </ul>
            </li>
            <li className="d-flex responsive-li">
              <ul className="responsive-ul" style={{ padding: 0 }}>
                <a href="https://discord.gg/dCvwUkt" target="__blank">
                  Discord
                </a>
              </ul>
              <ul className="responsive-ul" style={{ padding: 0 }}>
                <a href="https://www.youtube.com/channel/UCCq3XO8cOv34Au62Qtdawvw" target="__blank">
                  Youtube
                </a>
              </ul>
            </li>
          </div>
        </div>
      </div>
      <div className="separator-line" />

      <div className="copyright-wrap">
        <p className="copy">
          Copyright © 2021 <span>AMD Red League</span> All Rights Reserved.
        </p>
        <p className="powered">Powered by VivenciaBaires ®</p>
      </div>
    </div>
  );
}
