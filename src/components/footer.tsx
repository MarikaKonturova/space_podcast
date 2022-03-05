import React from "react";
import { Logo } from "./header";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer_wrapper">
        <ul className="links">
          <li className="links_name">Navigation</li>
          <li className="links_link">
            <a href="#intro" >
              Home
            </a>
          </li>
          <li className="links_link">
            <a href="#plans" >
              Plans
            </a>
          </li>
          <li className="links_link">
            <a href="#singers" >
              Singers
            </a>
          </li>
        </ul>
        <ul className="links">
          <li className="links_name">Our socials</li>

          <li className="links_link">
            <a href="" target="_blank">
              Instagram
            </a>
          </li>
          <li className="links_link">
            <a href="" target="_blank">
              Spotify
            </a>
          </li>
          <li className="links_link">
            <a href="" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
        <div className="footer_logo">
          <div className="logo" id='footer__logo'>
            <h6 className="logo_name" id='footer__logo_h6'>Podcaster</h6>
            <div className="logo_ellipse" id='footer__logo_ellipse'/>
          </div>
        </div>
        
        <ul className="links links_5li">
          <li className="links_name">Information</li>

          <li className="links_link">
            <a href="" target="_blank">
              About us
            </a>
          </li>
          <li className="links_link">
            <a href="" target="_blank">
              Contact us
            </a>
          </li>
          <li className="links_link">
            <a href="" target="_blank">
              Blogs
            </a>
          </li>
          <li className="link">
            <a href="" target="_blank">
              FAQ
            </a>
          </li>
        </ul><ul className="links">
          <li className="links_name">Useful links</li>

          <li className="links_link">
            <a href="" target="_blank">
              Privacy policy
            </a>
          </li>
          <li className="links_link">
            <a href="" target="_blank">
              Terms & conditions
            </a>
          </li>
          <li className="links_link">
            <a href="" target="_blank">
              Exchange and return policy
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">copyright 2022 all rights reserved</div>
    </footer>
  );
};
