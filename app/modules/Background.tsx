import React from "react";
import Image from "next/image";
import myImg from "@/app/assets/myacc.jpg";
import Link from "next/link";

const Background = () => {
  return (
    <section className="background">
      <div className="background__info">
        <Image alt="My picture" src={myImg} quality={100} />
        <div className="background__about-me">
          <h2>About me!</h2>
          <p>
            Hey there! I'm Angel, a passionate software developer with 5+ years
            of experience in DevOps, Mobile, and Web development, with a strong
            focus on the latter.
          </p>
        </div>
        <Link href="https://github.com/angelaldrete" className="hero__cta">
          Github
        </Link>
      </div>
    </section>
  );
};

export default Background;
