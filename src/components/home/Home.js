import React from 'react';
// import BackToTop from '../../components/ExperienceSection/BackToTop';
import "./Home.css"
// import homeImage from "/Users/hemanth/Desktop/react-portfolio/src/assets/images/Home.png"; 
import homeImage from "../../assets/images/Home.webp"; 
import SkillSection from '../skillSection/SkillSection';

function Home(){
    return(
        <div className="main-container" style={{marginTop:'0rem'}} >
        <div className="welcome" >Welcome to My Portfolio</div>
        
        <div className="container">
            <div className="image">
                <img src={homeImage} alt="PortfolioImage"/>
            </div>
            <div className="welcome-content" >
                <div className="helloTxt"><b>HELLO!</b></div>
                <div className="nameTxt"><b>I’m Hemanth Kumar</b></div>
                <div className="introTxt" style={{textAlign:'left'}}>
                    A passionate individual who always thrives to work on end-to-end products which develop sustainable 
                    and scalable systems to create impact.
                </div>
            </div>
        </div>
        
        <div className="projects-header" style={{marginTop:"50px"}}>
        What I Do?
        </div>
        <SkillSection/> 
        
        {/* <BackToTop /> */}
    </div>


    );
}
export default Home ;



