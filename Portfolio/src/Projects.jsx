import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./data/ProjectData";

const Projects = () => {
  return (
    <div id='project' className='bg-black w-full text-white flex flex-col justify-center items-center gap-8 m-auto py-12 max-sm:flex-col'>
    <section id="projects" className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">My Projects</h2>
      
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Projects;
