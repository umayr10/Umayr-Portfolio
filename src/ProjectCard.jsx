import React from "react";

const ProjectCard = ({ title, description, image, demoLink, githubLink, techStack }) => {
  return (
    <div className=" max-w-[450px] rounded-2xl shadow-lg overflow-hidden bg-black text-white border-2 border-white hover:shadow-2xl transition-transform hover:scale-105 m-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover m-auto" />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white text-sm mt-2">{description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 text-xs rounded-md text-black">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer"
               className="text-blue-600 hover:underline">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer"
               className="text-white hover:underline">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
