import React from 'react';
import { Icon } from '@iconify/react';
import pythonIcon from '@iconify-icons/logos/python';
import tensorflow from '@iconify-icons/logos/tensorflow';
import reactIcon from '@iconify-icons/logos/react';
import djangoIcon from '@iconify-icons/logos/django-icon';
import html5Icon from '@iconify-icons/logos/html-5';
import css3Icon from '@iconify-icons/logos/css-3';
import javascriptIcon from '@iconify-icons/logos/javascript';
import gitIcon from '@iconify-icons/logos/git-icon';
// import githubIcon from '@iconify-icons/logos/github-icon';
import mysqlIcon from '@iconify-icons/logos/mysql-icon'; 
import numpyIcon from '@iconify-icons/logos/numpy';
import matplotlibIcon from '@iconify-icons/logos/matplotlib-icon';
import pandasIcon from '@iconify-icons/logos/pandas-icon';

import tableauIcon from '@iconify-icons/logos/tableau-icon';
import powerBiIcon from '@iconify-icons/logos/microsoft-power-bi';
import seabornIcon from '@iconify-icons/logos/seaborn-icon';





import full_stack_img from './full_stack_img.webp';
import analysis_img from './analysis_img.webp';
import ml_img from './ml_img.webp';
import './SkillSection2.css'; // External CSS file for styles



const skillsData = [
  {
    title: 'Python-Full Stack Development',
    image: full_stack_img,
    description: [
      'Experience in building scalable and responsive full-stack applications.',
      'Familiar with React, Django, and MySQL (Python Full stack).',
      'Worked with REST APIs and integrated with various third-party services.'
    ],
    icons: [
      { icon: pythonIcon, tooltip: 'Python' },
      { icon: javascriptIcon, tooltip: 'JavaScript' },
      { icon: reactIcon, tooltip: 'React' },
      { icon: djangoIcon, tooltip: 'Django' },
      { icon: mysqlIcon, tooltip: 'MySQL' },
      
      { icon: css3Icon, tooltip: 'CSS3' },
      { icon: html5Icon, tooltip: 'HTML5' },
      { icon: gitIcon, tooltip: 'Git' },
      // { icon: githubIcon, tooltip: 'GitHub' },
    ]
  },
  {
    title: 'Data Analytics',
    image: analysis_img,
    description: [
      'Developed machine learning models and performed statistical analysis.',
      'Skilled in Python and TensorFlow for AI-driven solutions.',
      'Experience in data visualization using Matplotlib, Seaborn and Power BI.'
    ],
    icons: [
      { icon: pythonIcon, tooltip: 'Python' },
      { icon: numpyIcon, tooltip: 'Numpy' },
      { icon: pandasIcon, tooltip: 'Pandas' },
      
      
      { icon: matplotlibIcon, tooltip: 'Matplotlib' },
      { icon: seabornIcon, tooltip: 'Seaborn' },
      { icon: tensorflow, tooltip: 'TensorFlow' },
      { icon: tableauIcon, tooltip: 'Tableau' },
      { icon: powerBiIcon, tooltip: 'PowerBi' },
      
      
    ]
  },
  {
    title: 'Machine Learning',
    image: ml_img,
    description: [
      'Proficient in building machine learning models using Scikit-Learn, Keras,',
      'and Pandas. Experience in supervised and unsupervised learning models',
      'for data prediction and classification.'
    ],
    icons: [
      { icon: pythonIcon, tooltip: 'Python' },
      { icon: numpyIcon, tooltip: 'Numpy' },
      { icon: pandasIcon, tooltip: 'Pandas' },
      { icon: tensorflow, tooltip: 'TensorFlow' },
     
    ]
  },
];

const SkillSection = () => {
  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <div className="skills-main-div" key={index}>
          <div className="skills-image-div">
            <img src={skill.image} alt={skill.title} />
          </div>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skill.title}</h1>
           
            <div className="software-skills-main-div">
              <ul className="dev-icons">
                {skill.icons.map((icon, i) => (
                  <li className="software-skill-inline" key={i} data-tooltip={icon.tooltip}>
                    <Icon icon={icon.icon} className="iconify" />
                  </li>
                ))}
              </ul>
            </div>
            {skill.description.map((text, i) => (
              <p className="introTxt" key={i}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
