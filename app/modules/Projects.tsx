"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

const Projects = () => {
  const projects = [
    {
      title: "Develomancy",
      description: "A blog about software development and other things.",
      model: (
        <Spline scene="https://prod.spline.design/5ZTaGDXthyzCSA08/scene.splinecode" />
      ),
    },
    {
      title: "The Knob Studio",
      description:
        "An interactive website where I share my music as a producer.",
      graphic: (
        <Spline scene="https://prod.spline.design/5ZTaGDXthyzCSA08/scene.splinecode" />
      ),
    },
    {
      title: "Diagnosys",
      description: "A system for medical diagnosis and metrics.",
      graphic: (
        <Spline scene="https://prod.spline.design/5ZTaGDXthyzCSA08/scene.splinecode" />
      ),
    },
    {
      title: "One Pillow",
      description: "A reservation system for different purposes.",
      graphic: (
        <Spline scene="https://prod.spline.design/5ZTaGDXthyzCSA08/scene.splinecode" />
      ),
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__description">
        Both personal and professional projects are listed here.
      </p>

      <ul className="projects__list">
        {projects.map((project, index) => (
          <li className="projects__item" key={index}>
            <div className="projects__item--graphic">{project.graphic}</div>
            <div className="projects__item--content">
              <h3 className="projects__item--title">{project.title}</h3>
              <p className="projects__item--description">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
