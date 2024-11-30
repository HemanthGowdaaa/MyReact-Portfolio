import React, { useEffect, useState } from 'react';
import './Certifications.css'; // Adjust the path as necessary
import EducationMain from '../../components/Education/EducationMain';
import stanfordLogo from '../../assets/images/stanford_logo.png';
import anudipLogo from '../../assets/images/AnudipLogo2.png';
import metaLogo from '../../assets/images/metaLogo.png';
// import deeplearningLogo from '../../assets/images/deeplearning_ai_logo.png';
import ethnotechLogo from '../../assets/images/EthnotechLogo.png';
import mtfLogo from '../../assets/images/MTFLogo.png';
import udemyLogo from '../../assets/images/udemy_logo.png';
import hackerRankLogo from '../../assets/images/hackerRankLogo.png';
const Certificate = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API or file
    const certsData = [
      {
        id: 1,
        title: "Machine Learning",
        subtitle: "Andrew Ng",
        logo_path: stanfordLogo,
        alt_name: "Andrew Ng",
        certificate_link: "https://www.coursera.org/account/accomplishments/verify/9UKCUZMCE3HM",
        color_code: "#f1c40f"
      },
      {
        id: 2,
        title: "Data Analytics",
        subtitle: "Anudip Foundation",
        logo_path: anudipLogo,
        alt_name: "Anudip Foundation",
        certificate_link: "https://drive.google.com/file/d/1gttdkxt6zeGsOVnZ2qQRY2NimoPzICul/view?usp=drive_link",
        color_code: "#0bb1b1"
      },
      {
        id: 3,
        title: "Advanced React",
        subtitle: "Meta",
        logo_path: metaLogo,
        alt_name: "Meta",
        certificate_link: "https://www.coursera.org/account/accomplishments/verify/UZK4NRO3R9UD",
        color_code: "#ffffff"
      },
      {
        id: 4,
        title: "SQL",
        subtitle: "Hacker Rank",
        logo_path: hackerRankLogo,
        alt_name: "Andrew Ng",
        certificate_link: "https://www.hackerrank.com/certificates/364576b7e8e4",
        color_code: "#2ecc71"
      },
      {
        id: 5,
        title: "Artificial Intelligence",
        subtitle: "Ethnotech Training",
        logo_path: ethnotechLogo,
        alt_name: "Ethnotech Training",
        certificate_link: "https://drive.google.com/file/d/18sIgHxotTXo035ORZyAXOyj6Q4bMFb-b/view?usp=drive_link",
        color_code: "#f1c40f"
      },
      {
        id: 6,
        title: "Advanced SQL",
        subtitle: "Udemy Training",
        logo_path: udemyLogo,
        alt_name: "Udemy Training",
        certificate_link: "https://www.udemy.com/certificate/UC-59ba5bae-f10d-4d80-bb24-bc84efb1f7d6/",
        color_code: "#fff"
      },
      {
        id: 7,
        title: "Data Science",
        subtitle: "Ethnotech Training",
        logo_path: ethnotechLogo,
        alt_name: "Ethnotech Training",
        certificate_link: "https://drive.google.com/file/d/17AWdOrtFYQoV24k-4NhbMXqsuM0o1MKz/view?usp=drive_link",
        color_code: "#f1c40f"
      },
      {
        id: 8,
        title: "React",
        subtitle: "Meta",
        logo_path: metaLogo,
        alt_name: "Meta",
        certificate_link: "https://www.coursera.org/account/accomplishments/verify/UZK4NRO3R9UD",
        color_code: "#ffffff"
      },
      {
        id: 9,
        title: "WEB DEVELOPMENT",
        subtitle: "MTF Training",
        logo_path: mtfLogo,
        alt_name: "MTF Training",
        certificate_link: "https://drive.google.com/file/d/18qqbq717LhMvDto_7MOUu93mZruCb76g/view?usp=drive_link",
        color_code: "#ffffff"
      },
    ];

    setCertifications(certsData);
  }, []);

  const createCertificationCard = (cert) => (
    <div className="cert-card" key={cert.id}>
      <div className="content">
        <a href={cert.certificate_link} target="_blank" rel="noopener noreferrer">
          <div className="content-overlay"></div>
          <div className="cert-header" style={{ backgroundColor: cert.color_code }}>
            <img className="logo_img" src={cert.logo_path} alt={cert.alt_name} />
          </div>
          <div className="content-details fadeIn-top">
            <h3 className="content-title">Certificate</h3>
          </div>
        </a>
      </div>
      <div className="cert-body">
        <h2 className="cert-body-title">{cert.title}</h2>
        <h3 className="cert-body-subtitle">{cert.subtitle}</h3>
      </div>
    </div>
  );

  return (
    <div className="main" id="certs">
      <EducationMain />
      <div className="certs-header-div">
        {/* <h1 className="certs-header">Certifications</h1> */}
        <h1 className="projects-header">Certificates</h1>
      </div>
      <div className="certs-body-div" id="certs-body-div">
        {certifications.map(createCertificationCard)}
      </div>
    </div>
  );
};

export default Certificate;
