import React from 'react';
import 'wowjs/css/libs/animate.css';
import './Experience.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
   
    const experiences = [
        { year: '2045 - 2050', title: 'Data Analyst Intern', company: 'Anudip Foundation, Bengaluru, India', description: 'Conducting in-depth analysis of illicit financial flows using statistical methods and creating interactive Power BI dashboards for actionable insights. Currently visualizing Tata Motors stock data to aid in financial decision-making.' },
        { year: '2045 - 2050', title: 'Full Stack Developer Intern', company: 'Tech Fortune Technologies Pvt Ltd, Bengaluru', description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.' },
        { year: '2045 - 2050', title: 'Full Stack Developer Intern', company: 'Varcons Technologies Pvt Ltd.', description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.' },
        { year: '2045 - 2050', title: 'Full Stack Developer Intern', company: 'Varcons Technologies Pvt Ltd.', description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.' }
        // Add more experiences as needed
    ];

    return (
        <div className="experience" id="experience" >
            <h1 className="certs-header" >Experience</h1>
            <div className="container">
                {/* <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header> */}
                
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} wow ${index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}`} data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date" style={{alignItems:'center'}}>{exp.year}</div>
                                <h2 style={{color: '#3d312c', fontSize: '2rem',fontFamily: 'Arial, sans-serif',fontWeight: 'bold', alignItems:'center', textAlign:'center'}}>{exp.title}</h2>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;






