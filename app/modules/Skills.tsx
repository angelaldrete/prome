"use client";
import Link from "next/link";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoPhp,
  BiLogoReact,
  BiLogoAngular,
  BiLogoVuejs,
  BiLogoWordpress,
  BiLogoMagento,
  BiLogoDocker,
  BiLogoKubernetes,
  BiLogoAws,
  BiLogoPython,
  BiLogoNodejs,
  BiLogoFlutter,
  BiLogoJava,
  BiLogoGoLang,
} from "react-icons/bi";
import {
  DiCodeigniter,
  DiJenkins,
  DiSwift,
  DiIonic,
  DiMysql,
} from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import {
  SiAzuredevops,
  SiDotnet,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

const SkillItem = React.memo(({ icon }: { icon: JSX.Element }) => (
  <li className="skills__list-item">{icon}</li>
));

const Skills = () => {
  const skills = React.useMemo(
    () => [
      {
        icon: <AiFillHtml5 />,
      },
      {
        icon: <BiLogoCss3 />,
      },
      {
        icon: <BiLogoJavascript />,
      },
      {
        icon: <BiLogoJquery />,
      },
      {
        icon: <BiLogoPhp />,
      },
      {
        icon: <DiCodeigniter />,
      },
      {
        icon: <FaLaravel />,
      },
      {
        icon: <BiLogoReact />,
      },
      {
        icon: <BiLogoAngular />,
      },
      {
        icon: <BiLogoVuejs />,
      },
      {
        icon: <BiLogoWordpress />,
      },
      {
        icon: <BiLogoMagento />,
      },
      {
        icon: <BiLogoDocker />,
      },
      {
        icon: <BiLogoKubernetes />,
      },
      {
        icon: <BiLogoAws />,
      },
      {
        icon: <BiLogoPython />,
      },
      {
        icon: <BiLogoNodejs />,
      },
      {
        icon: <BiLogoFlutter />,
      },
      {
        icon: <BiLogoJava />,
      },
      {
        icon: <BiLogoGoLang />,
      },
      {
        icon: <DiJenkins />,
      },
      {
        icon: <DiSwift />,
      },
      {
        icon: <DiIonic />,
      },
      {
        icon: <DiMysql />,
      },
      {
        icon: <SiAzuredevops />,
      },
      {
        icon: <SiDotnet />,
      },
      {
        icon: <SiPrometheus />,
      },
      {
        icon: <SiGrafana />,
      },
    ],
    []
  );

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="skills" ref={ref}>
      {inView && (
        <>
          <h2 className="skills__title">Skills</h2>
          <p className="skills__description">
            Overall skills I've gathered by professional and personal experience
          </p>
          <div className={`skills__container ${inView ? "in-view" : ""}`}>
            <ul className="skills__list">
              {skills.map((skill, index) => (
                <SkillItem key={index} icon={skill.icon} />
              ))}
              {skills.map((skill, index) => (
                <SkillItem key={index} icon={skill.icon} />
              ))}
            </ul>
          </div>
          <Link href="/CV.pdf" className="hero__cta">
            View CV
          </Link>
        </>
      )}
    </section>
  );
};

export default Skills;
