import React from "react";
import './OurServices.scss';

function OurServices() {
    return (
        <section className="ourservices_cont">
            <p>Our Services</p>
            <h2>The services we are offering</h2>
            <p>Our service includes a spectrum of software development solutions from development to a
                smart decision for your business.</p>
            <div className="ourservices_cards">
                <div className="ourservices_cades_one">
                    <div className="ourservices_card card_one">
                        <h1><i className="fa-brands fa-bitcoin"></i></h1>
                        <h3>Blockchain Development</h3>
                        <p>We are a leading Blockchain development company in India providing Blockchain services like Smart
                            Contract development, ICO, Cryptocurrency Exchanges, Distributed apps across multiple domains.</p>
                    </div>
                    <div className="ourservices_card card_two">
                        <h1><i className="fa-solid fa-paintbrush"></i></h1>
                        <h3>Web App Development</h3>
                        <p>W3villa Technologies offer bespoke web app development services by harnessing a wide range of
                            technologies to deliver robust, efficient, and scalable web app solutions.</p>
                    </div>
                </div>
                <div className="ourservices_cades_one">
                    <div className="ourservices_card card_three">
                    <h1><i className="fa-solid fa-cart-shopping"></i></h1>
                    <h3>E-commerce Development</h3>
                    <p>W3villa Technologies is specialized in delivering custom E-commerce based application using Spree
                        Commerce, Shopify and many more.</p>
                </div>
                <div className="ourservices_card card_four">
                    <h1><i className="fa-solid fa-arrow-up-right-dots"></i></h1>
                    <h3>Mobile App Development</h3>
                    <p>Our expert mobile app developers are specialised in providing end-to-end solution of mobile app
                        development lifecycle that gives better version in terms of visibility and performance.</p>
                </div>
                </div>
                
            </div>
        </section>
    );
}

export default OurServices;
