/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

const myProjects = [
  {
    id: "0",
    name: "Eth vehicles marketplace",
    description: `Eth marketplace for buying used cars.`,
    img: "/assets/images/skills/solidity.png",
    link: " https://eth-cars-marketplace-nine.vercel.app/",
    tools: ["Solidity", "Web3", "TypeScript", "Nextjs", "TailwindCss"],
  },
];
const projects = [
  {
    id: "1",
    name: "Rak Exhiption Center",
    description: `a fully inegrated CMS with a group of wide services
      for the RAK Chamber Of Commerce & Industry`,
    img: "/assets/images/projects/rak2.png",
    link: "https://rakex.infostrategic.com/en/home",
    tools: ["Node", "typeorm", "React", "Redux", "MaterialUi"],
  },
  //   {
  //     id: "2",
  //     name: "RAK Chamber Of Commerce",
  //     description: `a fully inegrated CMS with a group of wide services
  //       for the RAK Chamber Of Commerce & Industry`,
  //     img: "/assets/images/projects/rak1.png",
  //     link: "https://rak2.infostrategic.com/en/home",
  //     tools: ["Node", "typeorm", "React", "Redux", "MaterialUi"],
  //   },
  {
    id: "3",
    name: "E-Lawyer- System",
    description: ` an electronic system and an intelligent application that
      isavailable on all browsers and smart devices.`,
    img: "/assets/images/projects/elawyer.jpg",
    link: " https://elawyer.moj.gov.ae/home",
    tools: ["Node", "express", "React", "Redux", "MaterialUi"],
  },
  {
    id: "4",
    name: "E-notary System",
    description: `electronic notary management system that can verify legal documents through a barcode and detect fake agencies. `,
    img: "/assets/images/projects/elawyer.jpg",
    link: " https://elawyer.moj.gov.ae/home",
    tools: ["Node", "express", "React", "Redux", "MaterialUi"],
  },
  {
    id: "5",
    name: "Smart Chatbot",
    description: `Smart chatbot that can integrate with customers and provide detailed information about the products and services.`,
    img: "/assets/images/skills/node.jfif",
    link: "#",
    tools: ["Node", "express", "SocketIo", "React"],
  },
];
const Projects = () => {
  return (
    <section className="pricing-one" id="projects">
      <div className="container">
        <div className="pricing-one__sep"></div>

        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <h3>Projects</h3>
          <p className="projects-type">Previus companies projects</p>
        </div>

        <div className="tabed-content">
          <div className="row">
            {projects.map((project) => (
              <div
                key={project.id}
                className="col-lg-4 wow fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="pricing-one__single">
                  <div className="pricing-one__inner">
                    <img
                      width={"100%"}
                      src={project.img}
                      alt={project.name}
                      className="pricing-one__icon"
                    />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="pricing-one__tools">
                      {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      rel="noreferrer"
                      target={"_blank"}
                      className="thm-btn pricing-one__btn"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tabed-content">
          <p className="projects-type">Self Learning</p>
          <div className="row">
            {myProjects.map((project) => (
              <div
                key={project.id}
                className="col-lg-4 wow fadeInLeft"
                data-wow-duration="1500ms"
              >
                <div className="pricing-one__single">
                  <div className="pricing-one__inner">
                    <img
                      width={"100%"}
                      src={project.img}
                      alt={project.name}
                      className="pricing-one__icon"
                    />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="pricing-one__tools">
                      {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      rel="noreferrer"
                      target={"_blank"}
                      className="thm-btn pricing-one__btn"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
