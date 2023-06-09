import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src, githubUrl, websiteUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const hasGithubUrl = Boolean(githubUrl);
  const hasWebsiteUrl = Boolean(websiteUrl);

  return (
    <div
      className={`w-full p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000`}
      style={{ height: expanded ? 'auto' : '420px' }} // Set the height explicitly
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {hasGithubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <BsGithub />
                </a>
              )}
              {hasWebsiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <p
              className={`text-sm tracking-wide mt-3 ${
                expanded ? '' : 'line-clamp-3'
              } hover:text-gray-100 duration-300`}
            >
              {des}
            </p>
            {!expanded && (
              <button
                className="text-sm text-designColor mt-2 hover:underline focus:outline-none self-start"
                onClick={toggleExpand}
              >
                Read More
              </button>
            )}
            {expanded && (
              <button
                className="text-sm text-designColor mt-2 hover:underline focus:outline-none self-start"
                onClick={toggleExpand}
              >
                Collapse
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
