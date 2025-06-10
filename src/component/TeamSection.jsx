import React from "react";
import "./TeamSection.scss";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const teamMembers = [
    {
        name: "Priyank Gupta",
        role: "Chief Technology Officer",
        image: "https://www.w3villa.com/production/assets/pages/about/priyank-new-8c330cd3f3fc8d5b06725c44f91b702f41e451d4ba180e65e9d0a7a2488f45d0.webp",
        socials: {
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Amrendra Singh",
        role: "VP - Engineering",
        image: "https://www.w3villa.com/production/assets/pages/about/amrendra-new-ac68ae37ffdc11985bf8db677927f1a621c39e6134ea926124232d6bbefd61e7.webp",
        socials: {
            linkedin: "#",
            github: "#",
            twitter: "#",
        },
    },
    {
        name: "Prateek Vikram Singh",
        role: "Human Resources Manager",
        image: "https://www.w3villa.com/production/assets/pages/about/pratik-sir-hr%20(1)-bc71cd19b767942b790e69233bada00528c6ced0f0c3a5a4470b539301541907.jpg",
        socials: {
            linkedin: "#",
        },
    },
    {
        name: "Shreenath Chaurasia",
        role: "Project Manager",
        image: "https://www.w3villa.com/production/assets/pages/about/shreenath-new-911dff5afa7c6f98162d777b1de6e4297043f7998ee2896142575842d6b38418.webp",
        socials: {
            linkedin: "#",
        },
    },
];

const TeamSection = () => {
    return (
        <section className="team-section">
            <h2>Our Team</h2>
            <p>
                The core team of W3villa Technologies has an average of 10+ years of experience,
                and they specialize in various IT solutions and offer top-notch services globally.
            </p>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <img src={member.image} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p className="role">{member.role}</p>
                        <div className="social-icons">
                            {member.socials.linkedin && (
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                            )}
                            {member.socials.github && (
                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                            )}
                            {member.socials.twitter && (
                                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
