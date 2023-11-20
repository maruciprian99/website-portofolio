import React from 'react';
import {
  FaLinkedinIn,
  FaPython,
  FaInstagram,
  FaDownload,
} from 'react-icons/fa';
import { SiJavascript, SiMysql, SiPandas, SiPowerbi } from 'react-icons/si';

const Media = () => {
  const handleDownloadCV = () => {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1I6hKvyoKT5eyHYWJKa-24K0S318JGkTV';
  
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };
  

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/maruciprian/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ionu%C8%9B-ciprian-m%C4%83ru-bb55951b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Best skill on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <SiPowerbi />
          </span>
          <span className="bannerIcon">
            <SiPandas />
          </span>
          <span className="bannerIcon">
            <SiMysql />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Download CV</h2>
        <div className="flex items-center gap-2">
          <button className="bannerIcon" onClick={handleDownloadCV}>
            <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Media;
