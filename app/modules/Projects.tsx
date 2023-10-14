"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Develomancy",
      description: "A blog about software development and other things.",
      link: "https://develomancy.vercel.app",
      model: (
        <Spline scene="https://prod.spline.design/vMhsTCRtH6OuR56x/scene.splinecode" />
      ),
    },
    {
      title: "The Knob Studio",
      description:
        "An interactive website where I share my music as a producer.",
      link: "https://theknobstudio.vercel.app",
      model: (
        <Spline scene="https://prod.spline.design/z87rEp9IY5gDVOYl/scene.splinecode" />
      ),
    },
    {
      title: "Diagnosys",
      description: "A system for medical diagnosis and metrics.",
      link: "https://diagnosys.vercel.app",
      model: (
        <Spline scene="https://prod.spline.design/I17j-YJ4Natf3pBv/scene.splinecode" />
      ),
    },
    {
      title: "One Pillow",
      description: "A reservation system for different purposes.",
      link: "https://onepillow.vercel.app",
      model: (
        <Spline scene="https://prod.spline.design/YM2QCSVWcYt-BYgk/scene.splinecode" />
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
            <div className="projects__item--graphic">{project.model}</div>
            <div className="projects__item--content">
              <h3 className="projects__item--title">{project.title}</h3>
              <p className="projects__item--description">
                {project.description}
              </p>
              <Link
                className="projects__item--link"
                href={project.link}
                target="_blank"
              >
                Visit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
