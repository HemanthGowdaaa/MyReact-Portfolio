import React, { useRef, useState } from 'react';
import './ContactSection2.css'; // External CSS for better organization
import emailjs from '@emailjs/browser';

// Importing images
import email_logo from '../../assets/images/logo_images/email_logo.svg';
import phone_logo from '../../assets/images/logo_images/phone_logo.svg';
import linkedin_logo from '../../assets/images/logo_images/linkedin_logo.svg';
import github_logo from '../../assets/images/logo_images/github.svg';

const ContactSection = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4lk7f2p', 'template_g2r12ue', form.current, 'ISiPGet6pzmGH3SSV')
      .then(
        () => {
          setIsEmailSent(true); // Display success message
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.error('Message Failed to Send:', error.text);
        }
      );
  };

  return (
    <div className="contact-body">
      {/* Contact Information Section */}
      <div className="header">Connect with Me</div>
      <div className="contact-container">
        <div className="contact-alignment">
          <div className="contact-info">
            {/* Email */}
            <div className="contact-item">
              <img src={email_logo} alt="Email Icon" className="icon" />
              <div>
                <h2 className="contact-item-header">Email</h2>
                <p>
                  <a href="mailto:hemanthgowda.0805@gmail.com" style={{ color: '#c58f6a' }}>
                    hemanthgowda.0805@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <img src={phone_logo} alt="Phone Icon" className="icon" />
              <div>
                <h2 className="contact-item-header">Phone</h2>
                <p>
                  <a href="tel:+919900871928" style={{ color: '#c58f6a' }}>+91 9900871928</a>
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <img src={linkedin_logo} alt="LinkedIn Icon" className="icon" />
              <div>
                <h2 className="contact-item-header">LinkedIn</h2>
                <a href="https://www.linkedin.com/in/hemanthkumar85" target="_blank" rel="noopener noreferrer" style={{ color: '#c58f6a' }}>
                  linkedin.com/in/hemanthkumar85
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <img src={github_logo} alt="GitHub Icon" className="icon" />
              <div>
                <h2 className="contact-item-header">GitHub</h2>
                <a href="https://github.com/HemanthGowdaaa" target="_blank" rel="noopener noreferrer" style={{ color: '#c58f6a' }}>
                  github.com/hemanthkumar.codes
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <div className="button-center">
              <div className="main-button">
                <a
                  href="https://drive.google.com/file/d/1W0gU_MSBgpMHAeblv97BLmKUK7fe7TtM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white' }}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-container">
        <div className="header">
          {isEmailSent ? 'Success! Your message has been sent.' : 'Get In Touch'}
        </div>

        {!isEmailSent ? (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" placeholder="Your Name" required />

            <label>Email</label>
            <input type="email" name="from_email" placeholder="Your Email" required />

            <label>Message</label>
            <textarea name="message" placeholder="Your Message" rows="5" required />

            <input type="submit" value="Send" className="main-button" />
          </form>
        ) : (
          <div className="success-message">
            <p>Thank you for getting in touch!!! I will respond to you as soon as possible.</p>
            <button onClick={() => setIsEmailSent(false)} className="main-button">
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
