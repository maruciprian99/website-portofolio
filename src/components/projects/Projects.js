import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Unity Game for Educational Purposes"
          des=" The main idea behind this project was to develop a software application made
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
          src={projectOne}
          
          websiteUrl="https://drive.google.com/drive/folders/1Lhium2F4GzysW6G4xggkgPvgPyCon45X?usp=sharing"
        />
        <ProjectsCard
          title="ETL Automation Data App"
          des=" Building an Application Using Python and ETL Pipeline for Data Retrieval and Processing from Multiple Servers

          In this project, we will create a comprehensive application using Python and ETL pipeline that automates the process of accessing and retrieving data from various servers like SVN, GIT, Jira, Bugzilla, Clearcase, Jenkins or migrating from MySQL database. We will use necessary libraries like pandas, numpy, pyodbc, sqlalchemy, paramiko and more to make this process possible.
          
          Problem Statement Businesses around the world are generating enormous amounts of data every day. However, handling and processing this data can be a cumbersome task. This project aims to provide a solution that automates the process of accessing and retrieving data from various sources, and process that raw data into final digital form using ETL pipeline.
          
          Solution Is an application that can connect to various servers and databases like SVN, GIT, Jira, and SQL using Python scripts that use etl pipeline. The data collected from these servers and databases is then processed using pandas and numpy to obtain a final digital form. The application should be portable, which means that it can be easily installed on any system without the need for any additional libraries or dependencies.
          
          Steps Involved Connect to SVN, GIT, Jira, SQL server/database using Python scripts. (paramiko/pyodbc) Collect desired data by creating MySQL queries from the servers/db and export locally using Python scripts. Create scripts to process raw data into final digital form using Pandas/NumPy. Creating a portable (.exe) application that allows the user to receive the desired processed data. Libraries Used Pandas - for processing and manipulating data. NumPy - for numerical computing and data analysis. PyODBC - for connecting to SQL Server. SQLAlchemy - for connecting to various databases. Paramiko - for connecting to servers (SSH)."
          src={projectTwo}
          githubUrl="https://github.com/maruciprian99/DATA_ETL_Project"
          
        />

        <ProjectsCard
          title="EDA - Exploratory Data Analysis"
          des=" This application leverages the principles of Exploratory Data Analysis (EDA) to automatically analyze any given dataset. The application provides a comprehensive set of standard key performance indicators (KPIs) and analysis, which can be presented in various formats, including informative text, charts, and other visualizations. With the integration of these technologies, users can gain valuable insights into their data effortlessly.

          Was created using:
         - Python: The programming language used as the core of the application.
         - Streamlit: A Python library used for building interactive web applications.
         - Pandas Profiling: A library for generating detailed exploratory data analysis reports.
         - JavaScript: A programming language used for adding interactivity and dynamic features to the app.
         - CSS: Cascading Style Sheets used for styling and formatting the visual elements of the app."
          src={projectFour}
          websiteUrl="https://maruciprian99-eda-app-1ssrpx.streamlit.app/"
          githubUrl="https://github.com/maruciprian99/eda"
          
        />
        <ProjectsCard
          title="Website Portofolio"
          des=" 
          The website portfolio is a dynamic showcase built with React, Tailwind CSS, JavaScript, HTML, and Bootstrap. This combination of modern technologies and frameworks allows for a visually appealing and interactive user experience. With seamless navigation, responsive design, and smooth animations, the portfolio effectively highlights the creator's talents and projects while demonstrating their proficiency in front-end development."
          src={projectThree}
          githubUrl="https://github.com/maruciprian99/website-portofolio"
          websiteUrl="https://ciprianmaru.com/"
        />
        
      </div>
    </section>
  );
}

export default Projects