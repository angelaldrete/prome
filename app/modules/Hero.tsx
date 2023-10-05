import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">John Doe</span>
          </h1>
          <p className="hero__description">
            I'm a{" "}
            <span className="hero__description--highlight">web developer</span>{" "}
            based in{" "}
            <span className="hero__description--highlight">London</span>.
          </p>
          <a href="#contact" className="hero__cta">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__image">
        <img src="/images/hero.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
