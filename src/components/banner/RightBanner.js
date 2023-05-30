import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[400px] z-10">
        <div className="flex items-center justify-center h-full">
          <img
            className="max-h-full"
            src={bannerImg}
            alt="bannerImg"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
