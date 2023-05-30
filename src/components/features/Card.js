import React, { useState, useRef, useEffect } from 'react';
import { FcExpand, FcCollapse } from 'react-icons/fc';

const Card = ({ item: { title, des, icon } }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isExpanded) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div
      className={`w-full px-12 h-${isExpanded ? 'full' : '80'} py-10 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group`}
      onClick={handleExpand}
      style={{
        overflowY: isExpanded ? 'auto' : 'hidden',
        paddingRight: '8px',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent',
        scrollbarTrackColor: 'transparent',
        scrollbarTrackTransparent: 'transparent',
      }}
    >
      <div
        className={`h-72 ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}
        ref={contentRef}
        style={{
          paddingRight: '8px',
        }}
      >
        <div
          className={`flex h-full flex-col gap-10 ${
            isExpanded ? 'translate-y-0' : 'translate-y-16'
          } transition-transform duration-500 group-hover:translate-y-0`}
        >
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6 flex-grow">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">
              {isExpanded ? des : truncateText(des, 50)}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <div className="expand-button" onClick={handleExpand}>
          {isExpanded ? <FcCollapse /> : <FcExpand />}
        </div>
      </div>
    </div>
  );
};

export default Card;
