// ProjectGallery.js
import React from "react";
import "./ProjectGallery.css";
import cafeSvg from "./two.webp"
import tataMotorSvg from "./tatamotors2_img.webp"
import litter_img from "./litter_img.webp"
import fashion_img from "./Fashion_image.webp"
import portfolio_img from "./portfolio2_img.webp"
import analysis_img from "./analysis_img.webp"



const projects = [
  {
    id: 1,
    projectName: "Next-Gen Fashion ",
    projectDesc: "A Virtual Fitting Room leverages live video feeds, body detection, and garment alignment to allow users to try on clothes digitally, enhancing convenience, reducing physical trials, and minimizing return rates for retailers.",
    tags: ["React", "Django", "MySql"],
    code: "https://github.com/HemanthGowdaaa/Next-Gen_Fashion.git",
    demo: "https://github.com/HemanthGowdaaa/Next-Gen_Fashion.git",
    image: fashion_img,
  },

  {
    id: 2,
    projectName: "East West Cafe",
    projectDesc: "East West Cafe is a database system that manages orders, menu, customers, and inventory for efficient cafe operations.",
    tags: [ "PHP", "React", "HTML/CSS"],
    code: "https://github.com/HemanthGowdaaa/East_West_Cafe_Management_System.git",
    demo: "https://github.com/HemanthGowdaaa/East_West_Cafe_Management_System.git",
    image: cafeSvg,
  },

  {
    id: 3,
    projectName: "Litter Management",
    projectDesc: "A computer vision-based system that detects and tracks littering from vehicles in real-time, storing incident data like timestamps and vehicle details in database for monitoring and reporting.",
    tags: ["Python", "SQLite", "OpenCV"],
    code: "https://github.com/HemanthGowdaaa/Littering_detection_using_opencv.git",
    demo: "https://github.com/HemanthGowdaaa/Littering_detection_using_opencv.git",
    image: litter_img,
  },

  {
    id: 6,
    projectName: "Shadow Economy Funds",
    projectDesc: "Utilized libraries such as Pandas for data manipulation, NumPy for numerical computations, and Matplotlib for data visualization to support data-driven insights.  ",
    tags: ["Python", "Seaborn","Tensorflow"],
    code: "https://github.com/HemanthGowdaaa/Shadow_Economy_Funds_Analysis.git",
    demo: "https://github.com/HemanthGowdaaa/Shadow_Economy_Funds_Analysis.git",
    image: tataMotorSvg,
  },
  {
    id: 5,
    projectName: "Personal Portfolio",
    projectDesc: "A React Portfolio is an interactive, responsive website built with React.js to showcase projects, skills, and achievements.",
    tags: ["React","Javascript", "HTML/CSS"],
    code: "https://github.com/HemanthGowdaaa/MyReact-Portfolio.git",
    demo: "https://github.com/HemanthGowdaaa/MyReact-Portfolio.git",
    image: portfolio_img,
  },
 
  {
    id: 4,
    projectName: "Netflix Analysis",
    projectDesc: "Netflix Data Analysis uncovers user trends and preferences to optimize content, personalize recommendations, and boost engagement and retention.",
    tags: ["Python", "API", "Seaborn"],
    code: "https://github.com/HemanthGowdaaa/Netflix_data_analysis.git",
    demo: "https://github.com/HemanthGowdaaa/Netflix_data_analysis.git",
    image: analysis_img,
  },
];

const ProjectCard = ({ project }) => (
  <div className="singleProject">
    <div className="projectContent">
      <h2 className="projectName">{project.projectName}</h2>
      <img src={project.image} alt={`${project.projectName}`} />
      <div className="project--showcaseBtn">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="iconBtn" aria-label="Demo">
          <i className="fa fa-play"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/source-code.png" alt="source-code"/>   </i>
        </a>
      </div>
    </div>
    <p className="project--desc">{project.projectDesc}</p>
    <div className="project--lang">
      {project.tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  </div>
);

const ProjectGallery = () => (
  <div className="project-main_container">
    <div className="certs-header-div">
    <h1 className="projects-header" >Projects</h1>
    </div>
    <div className="projectContainer">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
  
);

export default ProjectGallery;
