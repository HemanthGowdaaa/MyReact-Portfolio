import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AgustinaFont from './Agustina.otf';
import "./Footers.css";

const Footer = () => {
  const fontStyle = {
    fontFamily: 'Agustina, sans-serif',
    src: `url(${AgustinaFont}) format('opentype')`,
  };

  return (
    <div  className="footer-main">
      <div style={styles.leftText} className="leftText"><b>" Passion fuels the best code "</b></div>
      <div style={styles.centerText} className="footer-text">
       <b> Made with <span style={styles.heart} role="img" aria-label="heart">❤️</span> by <span className="htxt" style={fontStyle} ><b>Hemanth </b> </span></b>
      </div>
      <div style={styles.iconSection} className="footer-logo">
        <a
          href="https://www.instagram.com/_.hemanthgowda.__/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          aria-label="Instagram"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/hemanthkumar85"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/HemanthGowdaaa"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          aria-label="GitHub"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://leetcode.com/u/hemanth_kumar_m/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
          aria-label="Leetcode"
        >
          <SiLeetcode />
        </a>
      </div>
    </div>
  );
};

const styles = {
  // footer: {
  //   backgroundColor: "#222",
  //   color: "#fff",
  //   padding: "20px 0",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   position: "relative",
  //   bottom: 0,
  //   width: "100%",
  //   textAlign: "center",
  //   flexDirection: "row",
  //   @media (max-width:480px) {
  //     flexDirection: column;
      
  //   }
  // },
  centerText: {
    flex: 1,
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
  },
  heart: {
    color: "red",
    ariaLabel: "heart",
    role:"img",
  },
  iconSection: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconLink: {
    color: "white",
    margin: "0 10px",
    fontSize: "24px",
    textDecoration: "none",
  },
  leftText:{
    margin: '10px',
    
  }
};

export default Footer;

