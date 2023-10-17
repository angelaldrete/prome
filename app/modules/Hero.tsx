"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

const MemoizedSpline = React.memo(({ scene }: { scene: string }) => (
  <Spline scene={scene} />
));

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const sceneUrl = React.useMemo(
    () => "https://prod.spline.design/5ZTaGDXthyzCSA08/scene.splinecode",
    []
  );

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 200,
  });

  // Ensure that the LazySpline is only used in the browser
  const ModelComponent =
    typeof window !== "undefined" && inView ? LazySpline : MemoizedSpline;

  return (
    <section className="hero" ref={ref}>
      {inView && (
        <>
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
            <React.Suspense fallback={<div>Loading...</div>}>
              <ModelComponent scene={sceneUrl} />
            </React.Suspense>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
