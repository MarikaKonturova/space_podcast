import React, { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal: FC = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
