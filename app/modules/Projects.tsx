"use client";
import React, { Suspense, useMemo } from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

enum Direction {
  Previous = "previous",
  Next = "next",
}

const MemoizedSpline = React.memo(({ scene }: { scene: string }) => (
  <Spline scene={scene} />
));

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

const ProjectItem = ({
  project,
}: {
  project: { title: string; description: string; link: string; scene: string };
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
    delay: 400,
  });

  const GraphicComponent =
    typeof window !== "undefined" && inView ? LazySpline : MemoizedSpline;

  return (
    <div className="projects__item" ref={ref}>
      {inView && (
        <>
          <div className="projects__item--content">
            <h3 className="projects__item--title">{project.title}</h3>
            <p className="projects__item--description">{project.description}</p>
          </div>
          <div className="projects__item--graphic">
            <Suspense fallback={<div>Loading...</div>}>
              <GraphicComponent scene={project.scene} />
            </Suspense>
          </div>
          <Link className="hero__cta" href={project.link} target="_blank">
            Visit
          </Link>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = React.useMemo(
    () => [
      {
        title: "Develomancy",
        description: "A blog about software development and other things.",
        link: "https://develomancy.vercel.app",
        scene: "https://prod.spline.design/vMhsTCRtH6OuR56x/scene.splinecode",
      },
      {
        title: "The Knob Studio",
        description:
          "An interactive website where I share my music as a producer.",
        link: "https://theknobstudio.vercel.app",
        scene: "https://prod.spline.design/z87rEp9IY5gDVOYl/scene.splinecode",
      },
      {
        title: "Diagnosys",
        description: "A system for medical diagnosis and metrics.",
        link: "https://diagnosys.vercel.app",
        scene: "https://prod.spline.design/I17j-YJ4Natf3pBv/scene.splinecode",
      },
      {
        title: "One Pillow",
        description: "A reservation system for different purposes.",
        link: "https://onepillow.vercel.app",
        scene: "https://prod.spline.design/YM2QCSVWcYt-BYgk/scene.splinecode",
      },
    ],
    []
  );

  const [currentProject, setCurrentProject] = React.useState(0);

  const handleProjectChange = (direction: Direction) => {
    if (currentProject === 0 && direction === Direction.Previous) {
      setCurrentProject(projects.length - 1);
      return;
    }
    if (
      currentProject === projects.length - 1 &&
      direction === Direction.Next
    ) {
      setCurrentProject(0);
      return;
    }

    if (direction === Direction.Previous) {
      setCurrentProject(currentProject - 1);
      return;
    }

    if (direction === Direction.Next) {
      setCurrentProject(currentProject + 1);
      return;
    }
  };

  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__description">
        Both personal and professional projects are listed here.
      </p>

      <div className="projects__container">
        <FaArrowLeft
          className="projects__controls--previous"
          onClick={() => handleProjectChange(Direction.Previous)}
        />
        <ProjectItem project={projects[currentProject]} />
        <FaArrowRight
          className="projects__controls--next"
          onClick={() => handleProjectChange(Direction.Next)}
        />
      </div>
    </section>
  );
};

export default Projects;
