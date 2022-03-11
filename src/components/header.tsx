import React, { useState, useRef } from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import spotify from "../assets/icons/spotify.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const Close = () => setOpen(false);

  const handleClick = () => setOpen(!open);

  return (
    <header
      className={`header header_small_off ${open ? `header_small_on` : ``}`}
    >
      <div className="wrapper header_wrapper" >
        <div
          className={!open ? "burger" : "close"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="header_features">
          <li className="header_feature">
            <a href="#intro" onClick={handleClick}>
              <h5>Home</h5>
            </a>
          </li>
          <li className="header_feature">
            <a href="#plans" onClick={handleClick}>
              <h5>Plans</h5>
            </a>
          </li>
          <li className="header_feature">
            <a href="#singers" onClick={handleClick}>
              <h5>Singers</h5>
            </a>
          </li>
        </ul>
        <div className="header_logo">
          <Logo />
        </div>
        <div className="header_socials">
          <a href="#" target="_blank">
            <img src={instagram} alt="social-media" />
          </a>
          <a href="#" target="_blank">
            <img src={facebook} alt="social-media" />
          </a>
          <a href="#" target="_blank">
            <img src={spotify} alt="social-media" />
          </a>
        </div>
      </div>
    </header>
  );
};

export const Logo = () => {
  return (
    <div className="logo">
      <h6 className="logo_name">Podcaster</h6>
      <div className="logo_ellipse" />
    </div>
  );
};
