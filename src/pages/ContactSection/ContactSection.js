import React, { useRef, useState } from 'react';
import './ContactSection1.css'; // External CSS for better organization
import emailjs from '@emailjs/browser';

// Importing images
import email_logo from '/Users/hemanth/Desktop/react-portfolio/src/assets/images/logo_images/email_logo.svg';
import phone_logo from '/Users/hemanth/Desktop/react-portfolio/src/assets/images/logo_images/phone_logo.svg';
import linkedin_logo from '/Users/hemanth/Desktop/react-portfolio/src/assets/images/logo_images/linkedin_logo.svg';
import github_logo from '/Users/hemanth/Desktop/react-portfolio/src/assets/images/logo_images/github.svg';

const ContactSection = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4lk7f2p', 'template_g2r12ue', form.current, 'ISiPGet6pzmGH3SSV')
      .then(
        () => {
          setIsSubmitted(true); // Flip the form on successful submission
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
                  <a href="tel:+919900871928" style={{ color: '#c58f6a' }}>
                    +91 9900871928
                  </a>
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <img src={linkedin_logo} alt="LinkedIn Icon" className="icon" />
              <div>
                <h2 className="contact-item-header">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/hemanthkumar85"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c58f6a' }}
                >
                  linkedin.com/in/hemanthkumar85
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <img src={github_logo} alt="GitHub Icon" className="icon" />
              <div>
                <h2 className="contact-item-header">GitHub</h2>
                <a
                  href="https://github.com/HemanthGowdaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c58f6a' }}
                >
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
      <div className={`contact-container flip-container ${isSubmitted ? 'flipped' : ''}`}>
        <div className="flipper">
          {/* Front Side: Contact Form */}
          <div className="front">
            <div className="header">Get In Touch</div>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="from_name" placeholder="Your Name" required />

              <label>Email</label>
              <input type="email" name="from_email" placeholder="Your Email" required />

              <label>Message</label>
              <textarea name="message" placeholder="Your Message" rows="5" required />

              <input type="submit" value="Send" className="main-button" />
            </form>
          </div>

          {/* Back Side: Success Message */}
          <div className="back">
            <h2>Message Sent Successfully!</h2>
            <p>Thank you for reaching out. I'll get back to you shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
