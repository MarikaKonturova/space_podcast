import React from "react";
import girls from "../assets/img/girls.svg";

export const Others = () => {
  return (
    <section className="others">
      <div className="others_main">
        <h2>Hear what others say</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque
          ullamcorper porttitor blandit. Praesent lorem magna, fring
        </p>
      </div>
      <img src={girls} alt="" />
    </section>
  );
};
