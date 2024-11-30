
import React from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="back-to-top">
      <button onClick={scrollToTop} className="back-to-top-button">
        ^
      </button>
    </div>
  );
};

export default BackToTop;
