import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import spotify from "../assets/icons/spotify.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header_wrapper">
        <ul className="header_features">
          <li className="header_feature">
            <h5>Home</h5>
          </li>
          <li className="header_feature">
            <h5>Articles</h5>
          </li>
          <li className="header_feature">
            <h5>Blog</h5>
          </li>
        </ul>
        <div className="header_logo">
         <Logo/>
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

export const Logo = ()=>{
  return (
    <div className="logo">
    <h6 className="logo_name">Podcaster</h6>
    <div className="logo_ellipse" />
  </div>
  )
}