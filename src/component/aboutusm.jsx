import React from 'react';
import './aboutusm.scss';
import MissionSection from './ourmissabout';
import TeamSection from './TeamSection';
import WhyChooseUs from './ChooseAboutus';
import CompanyCulture from './CompanyCulture';

function AboutUsM() {
    return (
        <>
            <div className="aboutusm">
                <div className="aboutusm-left">
                    <div className="breadcrumbs">
                        <span>Home</span> &gt; <span>Company</span> &gt; <span>About us</span>
                    </div>
                    <h2>
                        At <span className="highlight">W3villa Technologies</span>, we craft
                        innovative software solutions to elevate your business potential.
                    </h2>
                    <p>
                        With years of experience in the industry, we have earned our place as a CMMi Level 3
                        appraised and ISO-accredited company. We strive to deliver custom software solutions
                        that meet our client&apos;s expectations. Our team has diverse expertise, including
                        software development, web design, mobile app development, and more.
                    </p>
                    <button className="contact-btn">Contact Us</button>
                </div>
                <div className="aboutusm-right">
                    <img
                        src="https://www.w3villa.com/production/assets/pages/about/about-us-banner-image-1-2b6700cf8c9a2657c5974d6913d6391b7d41f34c191c612a1531c8bc77d430ae.jpg"
                        alt="Tech Graphic"
                    />
                </div>
            </div>
            <div className="who-we">
                <div className="who-we-are">
                    <h3>Who We Are?</h3>
                    <p>
                        We are a software development company specializing in web 3.0 solutions with a focus on innovation and quality
                        work. We specialize in providing cutting-edge digital solutions that help businesses of all sizes achieve
                        their goals. We believe in leveraging the latest technology to build efficient and effective software
                        solutions that drive business growth. <br /><br />


                        Whether it's building a custom website, developing a mobile app, or creating complex software systems, we
                        have the expertise and experience to bring your vision to life. We're dedicated to helping our clients
                        succeed in a rapidly changing digital landscape. At our core, we are driven by a passion for technology
                        and a commitment to delivering & boosting business potential.
                    </p>
                </div>
            </div>
            <MissionSection />
            <TeamSection />
            <WhyChooseUs />
            <CompanyCulture />
        </>
    );
}

export default AboutUsM;
