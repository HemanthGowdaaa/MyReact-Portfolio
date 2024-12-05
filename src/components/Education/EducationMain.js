// EducationMain.js
import React from 'react';
import DegreeCard from './DegreeCard';
import './DegreeCard.css';
import eastWestLogo from './eastWest_logo.webp';

const EducationMain = () => {
  return (
    <div className="education-main">
      <div className="basic-education">
        <div className="educations">
          <div className="educations-header-div">
            <h1 className="projects-header">Education</h1>
          </div>

          {/* DegreeCard Example */}
          <DegreeCard
            imgSrc={eastWestLogo}
            title="East West Institute of Technology"
            subtitle="Bachelor of Engineering in Computer Science & Engineering"
            duration="2021 - 2025"
            descriptions={[ "Acquired a solid foundation in computer science fundamentals, including algorithms, data structures, and software engineering principles.",
              "Completed coursework in areas like Artificial Intelligence, Machine Learning, Web Development, and Database Management, developing skills in both theoretical and practical aspects of the field.",
              // "Engaged in multiple team projects to design and develop applications using technologies.",
              "Participated in seminars, workshops, and hackathons to enhance problem-solving skills and gain hands-on experience in real-world software development."]}
            link="https://ewit.edu.in/"
          />
          {/* Add more DegreeCard components if needed */}
        </div>
      </div>
    </div>
  );
};

export default EducationMain;
