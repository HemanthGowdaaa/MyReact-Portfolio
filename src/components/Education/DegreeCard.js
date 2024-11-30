// DegreeCard.js
import React from 'react';
import './DegreeCard.css';

const DegreeCard = ({ imgSrc, title, subtitle, duration, descriptions, link }) => {
  return (
    <div  className="degree-card">
      <div className="degree-card-img" >
        <img
          className="card-img"
          src={imgSrc}
          alt="Logo"
          style={{ borderRadius: '50%', maxWidth: '180px' }}
        />
      </div>
      <div className="degree-card-body" style={{backgroundColor:'#fff'}}>
        <div className="body-header">
          <div className="body-header-title">
            <h2 className="degree-card-title">{title}</h2>
            <h3 className="degree-card-subtitle">{subtitle}</h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration">{duration}</h3>
          </div>
        </div>
        <div className="body-content">
          {descriptions.map((desc, index) => (
            <p key={index} className="content-list">{desc}</p>
          ))}
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="visit-btn">
              <p className="btn">Visit Website</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
