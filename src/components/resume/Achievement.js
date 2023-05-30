import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold"></h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Scientific Session of 2022 of Transilvania University Brasov, Electrical Engineering Faculty"
            subTitle={<a href="https://drive.google.com/drive/folders/1Lhium2F4GzysW6G4xggkgPvgPyCon45X?usp=sharing" target="_blank" rel="noopener noreferrer">Project Link</a>}
            result="First place at Scientific Session of 2022 with the project “Unity Game for Educational Purposes”"
            des="The main idea behind this project was to develop a software application made
            with the help of the Unity graphics engine, using different technologies to create
            a game that was based on certain goals.
            A first goal was to approach a different method of encouraging students to
develop personally for educational purposes by creating an environment in which
they can use their knowledge in solving certain missions that consist of questions
from the subjects they did at Transilvania University Brasov, more precisely
in the present case of the project, at the Faculty of Electrical Engineering
and Computer Science.
Another goal was to maintain the player’s interest in this type of game. That’s
why I chose to implement certain systems and features to create entertainment
for the player to enjoy missions while having fun exploring the virtual environment
and the adventures he encounters, as well as developing and verifying his
knowledge. through mission questions."
          />
          
        </div>
      </div>
      <div>
        
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
