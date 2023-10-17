"use client";
import React from "react";
import Image from "next/image";
import myImg from "@/app/assets/myacc.jpg";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Background = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 200,
  });

  return (
    <section className="background" ref={ref}>
      {inView && (
        <div className="background__info">
          <Image
            alt="My picture"
            src={myImg}
            quality={100}
            className="background__image"
          />
          <div className="background__about-me">
            <h2>About me!</h2>
            <p className="background__description">
              Hey there! I'm Angel, a passionate software developer with 5+
              years of experience in DevOps, Mobile, and Web development, with a
              strong focus on the latter.
            </p>
            <Link href="https://github.com/angelaldrete" className="hero__cta">
              Github
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Background;
