import React from "react";
import "./ChooseAboutus.scss";

const features = [
    {
        icon: "https://www.w3villa.com/production/assets/pages/about/happy-3bc0d1d6f3b25ac04f27cdfd45271b613bd834fadd57c4e7723a51fbb3016109.png",
        title: "Happy client",
        description: `“Smart developers, Great team, W3villa Technologies gave wings to our idea” and much more. This is what our clients have to say about us. We let our work do most of the talking for us.`,
    },
    {
        icon: "https://www.w3villa.com/production/assets/pages/about/artificial-intelligence-775973a9563fb0fbd269d0e496742d96fc6def44202c9285fe273196626d0b9c.png",
        title: "Practical Solutions",
        description: `We believe in making a solution that works practically not just in theory. The end outcome is what matters to us the most.`,
    },
    {
        icon: "https://www.w3villa.com/production/assets/pages/about/coding-8035bf12e2a3e359884e4a1021d740a0daa62ad3dccaa90adf5f832944c7c184.png",
        title: "Experienced Developers",
        description: `Our developers step in with their can-do attitude and take challenges head-on. There ain’t no challenge big enough for our developers to tackle.`,
    },
    {
        icon: "https://www.w3villa.com/production/assets/pages/about/diamond-e8309b6ddb9c22948238629a69ba7e3c4b6fa8cd9084bcfaf0fc0729a83fe425.png",
        title: "Values",
        description: `W3villa Technologies core is built and shaped around the values that we believe which is well reflected in the solutions we deliver and the relationships that we forge.`,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <h4 className="subtitle">Why Choose Us?</h4>
            <h2 className="title">Collaborate to Innovate: Creating Plans for Success</h2>
            <div className="highlight">
                Through our approach, brands have gained the ability to expand their businesses
                and attain a competitive edge on a global scale.
            </div>
            <p className="description">
                Software development is a craft that involves applying programming languages in an artistic manner
                to achieve top-quality service and foster exceptional client relationships.
            </p>
            <p className="description">
                As each business has distinct needs, we actively listen, comprehend, and collaborate closely with
                you to translate your vision into a tangible reality. We are assured in our approach to your
                requirements and have a dedicated development team that can deliver customized solutions to meet
                every need.
            </p>

            <div className="features">
                {features.map((item, index) => (
                    <div className="feature-card" key={index}>
                        <div className="icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
