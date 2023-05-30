import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Analyst"
            subTitle="Dec 2022 - Present"
            result="Autoliv"
            des="I leverage Python, SQL, Excel, PowerBI, Snowflake, Azure, and Jupyter Notebook to automate processes, analyze data and provide insights that support strategic decision-making.
            I automate ETL pipelines, design and implement analytical models and algorithms, conduct statistical analysis and data mining, and build predictive models to forecast future outcomes or finding a way to improve the current models.
            Trying to create ML modules and traing algorithms in order to create platforms that can automatically analyse datasets and make forecasts for best business practices or company needs.
            I use Business Intelligence analysis and visualization tools such as PowerBI to create intuitive dashboards, reports, and visualizations that enable stakeholders to easily understand complex data. By analyzing and interpreting data trends.
            I provide insights and recommendations that help the organization make informed decisions and improve performance to harness the power of Business Intelligence to drive success and growth for the organization.I leverage Python, SQL, Excel, PowerBI, Snowflake, Azure, and Jupyter Notebook to automate processes, analyze data and provide insights that support strategic decision-making. I automate ETL pipelines, design and implement analytical models and algorithms, conduct statistical analysis and data mining, and build predictive models to forecast future outcomes or finding a way to improve the current models. Trying to create ML modules and traing algorithms in order to create platforms that can automatically analyse datasets and make forecasts for best business practices or company needs. I use Business Intelligence analysis and visualization tools such as PowerBI to create intuitive dashboards, reports, and visualizations that enable stakeholders to easily understand complex data. By analyzing and interpreting data trends. I provide insights and recommendations that help the organization make informed decisions and improve performance to harness the power of Business Intelligence to drive success and growth for the organization.
            Aptitudes: Problem Solving · Data Modeling · Microsoft SQL Server · Dashboards · Data Visualization · Data Analytics · Data Science · SQL Server Integration Services (SSIS) · streamlit · Machine Learning · Analytical Skills · Scikit-Learn · Microsoft Power BI · SQL · Snowflake · Extract, Transform, Load (ETL) · MySQL · Python (Programming Language) · Pandas (Software) · Data Analysis"
          />
          <ResumeCard
            title="Python Developer "
            subTitle="Mai 2022-Dec 2022"
            result="Atos IT Solutions"
            des="
            Use Python and ETL pipeline along with necessary libraries such as pandas,numpy,pyodbc,sqlalchemy and more to create an application that automatically access and retrieves data from multiple server such as SVN, GIT, Jira, Bugzilla, Clearcase, Jenkins or migrate from MySQL database . Those data by using python scripts that use etl pipeline are processed to have a final digital form:
             -connect to SVN, GIT, Jira, SQL server/database using python scripts. (paramiko/pyodbc) 
             -collect desire datas creating MySQL querrys, from the servers/db and export locally using py scripts.
             -create scripts to processing raw datas into final digital form using Pandas/NumPy
             -creating an portable(.exe) application that allows the user to receive the desired processed dataUse Python and ETL pipeline along with necessary libraries such as pandas,numpy,pyodbc,sqlalchemy and more to create an application that automatically access and retrieves data from multiple server such as SVN, GIT, Jira, Bugzilla, Clearcase, Jenkins or migrate from MySQL database . Those data by using python scripts that use etl pipeline are processed to have a final digital form: -connect to SVN, GIT, Jira, SQL server/database using python scripts. (paramiko/pyodbc) -collect desire datas creating MySQL querrys, from the servers/db and export locally using py scripts. -create scripts to processing raw datas into final digital form using Pandas/NumPy -creating an portable(.exe) application that allows the user to receive the desired processed data… vizualizați mai multe
            Aptitudes: Problem Solving · Data Modeling · Microsoft SQL Server · Data Visualization · Data Analytics · Puty · Database Testing · Machine Learning · SQL · Extract, Transform, Load (ETL) · MySQL · Python (Programming Language) · Pandas (Software) · NumPy · Data Analysis"
          />
          <ResumeCard
            title="Software Developer Internship"
            subTitle="Iun 2021-Aug 2021"
            result="IT LABS RD"
            des="Completing the internship required for my faculty was a really great experience where I took part in a project to develop a new computer game. I found this experience extremely helpful for my ongoing development with a great deal of things to learn. It is rewarding to be part of creating something new, however one of the many things I learned is that it can be difficult at times and there’s always ups and downs, but in the end, it was all a good hard fun.Completing the internship required for my faculty was a really great experience where I took part in a project to develop a new computer game. I found this experience extremely helpful for my ongoing development with a great deal of things to learn. It is rewarding to be part of creating something new, however one of the many things I learned is that it can be difficult at times and there’s always ups and downs, but in the end, it was all a good hard fun.
            Aptitudes: Game Design · Game AI · C# · Unity · REST APIs · Game Development · Blender Animation"
          />
          
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold"></h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Analyst-Vacancy Post"
            subTitle="Aug 2019-Nov 2019"
            result="In-Tech Engineering Services SRL"
            des="My main responsability was to label certain images correctly. I used to organize various video materials into frames. The job implied to pay particular attention to details and to take quick and independant decisions depending on the situations. The job involved good skills as a team worker.My main responsability was to label certain images correctly. I used to organize various video materials into frames. The job implied to pay particular attention to details and to take quick and independant decisions depending on the situations. The job involved good skills as a team worker.
            Aptitudes: Data Analytics"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
