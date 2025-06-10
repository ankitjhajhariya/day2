import React from 'react';
import './ourmissabout.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function MissionSection() {
    return (
        <div className="mission-section">
            <div className="mission-text">
                <h4>Our Mission</h4>
                <h3>Building Software to Empower & Transform</h3>
                <p>
                    With over a decade of experience in the IT industry, he has a proven track record of
                    successfully leading teams and delivering high-quality software. His passion for innovation and
                    customer satisfaction has been the driving force behind our company's growth.
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </div>
            <div className="ceo-card">
                <img
                    src="https://www.w3villa.com/production/assets/pages/about/Ishank-new-2.1-c23d35f554009f7cd750b834d8f2a69dd88c71815bb735d9798efa5fcdef7f81.webp"
                    alt="CEO"
                />
                <div className="ceo-info">
                    <h3>Ishank Gupta</h3>
                    <p>CEO - W3villa</p>
                </div>
            </div>
        </div>
    );
}

export default MissionSection;
