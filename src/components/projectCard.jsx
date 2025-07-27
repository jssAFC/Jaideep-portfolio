import React from "react";
import fileIcon from "../assets/file-icon.svg";
import github from "../assets/github.svg";
import openIcon from "../assets/open-link-icon.svg";

const ProjectCard = ({
  title,
  description,
  technologies,
  repoLink,
  demoLink,
  keyFeatures,
}) => {
  return (
    <div className="w-full max-w-[700px] flex flex-col sm:flex-row shadow-2xl rounded-3xl ">
      {/* Left Section */}
      <div className="w-full sm:w-3/5 flex flex-col gap-2 bg-white text-black p-4 rounded-t-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-tr-none ">
        <div className="flex gap-2 items-center mb-2">
          <img src={fileIcon} alt="" className="w-8 h-8" />
          <h1 className="primary-font text-xl">{title}</h1>
        </div>
        <p className="secondary-font">{description}</p>

        <p className="secondary-font font-bold mt-2">Technologies Used</p>
        <ul className="flex flex-wrap gap-2 text-xs text-black">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-lime-200 px-3 py-1 rounded-2xl whitespace-nowrap"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 items-center text-xs mt-3">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black px-3 py-2 rounded-md flex gap-1 hover:ring-1 hover:ring-lime-500 items-center border border-gray-200">
              <p>View Code</p>
              <img src={github} className="h-4 w-4" alt="GitHub" />
            </button>
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-lime-500 text-black px-3 py-2 rounded-md flex gap-1 hover:ring-1 hover:ring-lime-500 items-center">
              <p>View Demo</p>
              <img src={openIcon} className="h-5 w-5" alt="Open Link" />
            </button>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-2/5 bg-gradient-to-b from-black to-gray-800 p-4 text-white rounded-b-3xl sm:rounded-br-3xl sm:rounded-tr-3xl sm:rounded-bl-none">
        <h4 className="primary-font text-lg mb-2 text-lime-500">Key Features</h4>
        <ul className="list-disc pl-5 text-sm secondary-font space-y-1">
          {keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
