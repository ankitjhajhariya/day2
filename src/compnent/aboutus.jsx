import React from 'react';
import './aboutus.scss'
function Aboutus() {
    return (
        <>
            <div className="aboutus">
                <div className="aboutimg">
                    <img src="https://www.w3villa.com/production/assets/landing_page/who_we_are_image-2.0-2f0adc5481a3332c4fb5247b79b5ac355bd2642f088587aafbc6085665d9f60d.webp" alt="" />
                </div>
                <div className="aboutdis">
                    <h3>About Us</h3>
                    <h1>Who we are?</h1>
                    <p>We are CMMi Level 3 appraised software development company that offers state-of-the-art technological solutions to startups, SMEs, and enterprises across the globe. We bring a design-led approach to integrate digital transformation by incorporating innovative solutions to improve customer experience. Our 100+ dedicated engineers are well-trained to deploy on any complexity development project with unparalleled results.

                        We do believe in structured and automated support systems by implementing agile and scrum methodology in our day-to-day operations that keep our clients accurate in any delivery.</p>
                    <a href="/">View More <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </>
    );
}

export default Aboutus;

