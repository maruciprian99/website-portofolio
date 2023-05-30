import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[300px] z-10">
        <div className="flex items-center justify-center h-full">
          <img className="max-h-full" src={bannerImg} alt="bannerImg" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <h2 className="text-red-800 text-3xl font-bold animate-pulse">
          <span className="animate-pulse-off">Website in development...</span>
        </h2>
      </div>
    </div>
  );
};

export default RightBanner;
