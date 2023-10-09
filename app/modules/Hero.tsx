"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Angel Aldrete</span>
          </h1>
          <p className="hero__description">
            I'm a
            <span className="hero__description--highlight">
              <strong> Software Developer </strong>
            </span>
            based in
            <span className="hero__description--highlight"> Mexico</span>.
          </p>
          <Link href="#contact" className="hero__cta">
            Get in touch
          </Link>
        </div>
      </div>

      <div className="hero__model">
        <Spline scene="https://prod.spline.design/5ZTaGDXthyzCSA08/scene.splinecode" />
      </div>
    </section>
  );
};

export default Hero;
