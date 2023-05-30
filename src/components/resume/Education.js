import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013-2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Telecomunications and Telecomunications Systems"
            subTitle="2018-2012"
            result="Transilvania University: Faculty of Electrical Engineering and Computer Science"
            des={<a href="https://iesc.unitbv.ro/ro/" target="_blank" rel="noopener noreferrer">UNITBV IESC Website</a>}

          />
          <ResumeCard
            title="Baccalaureate Diplome - Mathematics & Computer Science"
            subTitle="(2013 - 2017)"
            result="Emil Botta College "
            des={<a href="http://www.colegiulemilbotta.ro/" target="_blank" rel="noopener noreferrer">Emil Botta College Website</a>}

          />
          
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education