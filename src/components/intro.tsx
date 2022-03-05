import React from "react";
import podcast from "../assets/img/podcast.svg";

export const Intro = () => {
  return (
    <section className="intro" id='intro'>
      <div className="wrapper">
        <div className="intro_main">
          <h1>Night Podcast</h1>
          <h3>Listen to our Podcast at night after a tiring day</h3>
          <img src={podcast} alt="available on apple podcast" />
        </div>
      </div>
    </section>
  );
};
