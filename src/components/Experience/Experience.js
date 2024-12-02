import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';
import './Experience.css'
const Experience = () => {
    const experiences = [
        { year: 'June 2024 – Present', title: 'Data Analyst Intern', company: 'Anudip Foundation, Bengaluru, India', description: 'Utilized Power BI, SQL, and Python to conduct in-depth analysis of Netflix, Shadow Economy Funds and Tata Motors. Creating impactful visualizations and insightful reports.',link:'https://drive.google.com/file/d/1iIZZaIq0G_TlaTVu-8wdwvVMOR3x2Y5y/view?usp=drive_link' },
        { year: 'Oct 2023 – Dec 2023', title: 'Full Stack Developer Intern', company: 'Varcons Technologies Pvt Ltd, Bengaluru, India', description: 'Redesigned the "We Save Animals" NGO website using modern web technologies to enhance user experience and functionality. ',link:'https://v.certiefy.com/S0VZR0VOMuKLhY1Wj5UO-G9VMxvMn5mNwdPEHKJvmfdoMXqCx-TDlNwTs8rw3NOjUJn7Ot-tlt8TFiT1vLlaLb7Fu4PiSni1xCFenDiPpMwx-E81QcmyK2UJabfy-4tMX0J1Yfc4vjtZitzuZHq13eMr_gm5VgdSsOXSyDw7xjrs3nSwAEQ87k5BPdl0Gfe1IDBxTK66ZswH6py890BX8LC11Kd5-UuBa5uUV7AFw6ksKY0KtiFmaT1i1Evk395q3aI59v1P_2GayozNhtaCysnu7f-od160yCfQke6z0xT1RY8QKIM4-cQ9-IVVacA8PC-tkBDF26hsGPbwoafaims5Lwvb6tblHODii4WwkRpdw0pHkmLYHx5Jk2cyKg9zxGNlopDAjNHCVhqbqQ=='},
        { year: 'Oct 2023 – Nov 2023', title: 'Software Developer Intern', company: 'Tech Fortune Technologies Pvt Ltd, Bengaluru.', description: 'Developed and deployed dynamic web applications using React and Django, enhancing functionality and user experience. Utilized SQL and Python for database management and backend development.',link:'https://drive.google.com/file/d/11eAec_KNSqFSMbwJ_pU3QeYrcv8YBWQw/view' },
        { year: 'June 2023 – July 2023', title: 'Full Stack Developer Intern ', company: 'Varcons Technologies Pvt Ltd, Bengaluru, India', description:'Demonstrated strong design skills and technical expertise, delivering the project on time per client specifications.',link:'https://v.certiefy.com/S0VZR0VOMuKLhWZW0S8Ksa0S-50G65akMnmhBtyoxzfX8IEGrT_kVr5xADqYmurYNv58Trwr6sf8fdo_XmXHV0EeVzIaee5TVgqf9ynsj-FVdbZMIPWm0jWgs00sfvdP6U4r6kJo90gbou-IIn4-Rm0rJRsBp7pJKvFIGoVI8mhTrIlbH2oUPwFKc9op098tRvhq3BIc6UJHyYWcXrWSaagACvWi6_6TvUAnw-I2QC6SpJxE9zubyVEQrhfFoVtmb7vZcbqg8nbl_YiD6sszNTo_bLckltFHVCCNuTSvDGE673225DWtjdfj74Z-xm4_J8kJ712xRgQTtuKLhe9rYy9L5luwD6mNCe6fnj59ganv-K8t5vI2yrJ0JCXV' },
        // Add more experiences as needed
    ];

    const hackathons = [
        { year: 'June 2024 – Present', title: 'Smart India Hackathon', company: 'Bengaluru, India', description: "Developed a women's safety app featuring navigation, real-time notifications, and map-sharing capabilities to enhance women's safety and connectivity." },
        { year: 'Sep 2024', title: 'Guvi Learnathon', company: 'HCL Pvt Ltd, Bengaluru, India', description: 'Built an innovative resume reader powered by OpenAI API, designed to analyze and present resume content in a creative, user-friendly format. ',link:'https://www.guvi.in/share-certificate/670Ey26V5D17894K8W' },
        { year: 'Nov-2023', title: 'Walmart Sparkathon', company: 'Walmart Global Tech, Bengaluru, India ', description: 'Proposed an innovative "Farmer Friend" solution to guide farmers on crop selection based on soil and climate while offering a platform to sell their yield online.',link:'https://drive.usercontent.google.com/download?id=1Z9mX_2PFgaqnXTuwqd1wPFyv4vBQdS38' },
       
    ];

    const workshops = [
        { year: 'Oct – 2023', title: 'Data Analysis with pandas', company: 'Aqmenz Automation Pvt. Ltd, Bengaluru, India', description: 'Participated in a hands-on workshop on data analysis with Pandas, enhancing skills in data manipulation and insights extraction.',link:'https://drive.google.com/file/d/17BYicdGeD-H7Bb2ltfoBHgpsLuZpuhBe/view?usp=drive_link'},
        { year: 'jun – 2023', title: 'Machine Learning Applications', company: 'KIMO Pvt Ltd, Bengaluru, India', description: 'Completed an in-depth course on Python libraries for machine learning applications, gaining hands-on experience with advanced Machine Learning.',link:'https://drive.google.com/file/d/18r9UobteEOVlsy88ic77ZWxtJ3Si7ik3/view?usp=sharing' },
       
    ];

    return (
        <div className="experience" id="experience">
            <div className="projects-header" >Experience</div>
            <div className="container">
                {/* <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            
                </header> */}
                
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} wow ${index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}`} data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">{exp.year}</div>
                                <a href={exp.link}><h2>{exp.title}</h2></a>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="projects-header" >Hackathon </div>
            <div className="container">
                {/* <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            
                </header> */}
                
                <div className="timeline">
                    {hackathons.map((hacks, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} wow ${index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}`} data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">{hacks.year}</div>
                                <a href={hacks.link}><h2>{hacks.title}</h2></a>
                                <h4>{hacks.company}</h4>
                                <p>{hacks.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="projects-header" > Workshop</div>
            <div className="container">
                {/* <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            
                </header> */}
                
                <div className="timeline">
                    {workshops.map((works, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} wow ${index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}`} data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">{works.year}</div>
                                <a href={works.link}><h2>{works.title}</h2></a>
                                <h4>{works.company}</h4>
                                <p>{works.description}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
