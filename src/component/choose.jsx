import React from "react";
import './choose.scss';

function Choose() {
    return (
        <>
            <div className="choose-cont">
                <div className="choose-content">
                    <h2>How can W3villa Technologies
                        grow your Business?</h2>
                    <p>We provide full-cycle software development services that smoothly adapt to the needs of
                        your project, from IT strategy advice and thorough technology roadmaps to the end-to-end
                        construction of scalable solutions.</p>
                    <div className="choose-detail">
                        <div className="choose-detail-on">
                            <div className="choose-detail-card">
                                <div className="choose-detail-card-img">
                                    <img src="./one.png" alt="chooselogo" />
                                </div>
                                <div>
                                    <h3>Dedicated Team</h3>
                                    <p>Our dedicated pool of tech-savvy experts specializes in utilizing
                                        state-of-the-art technologies to enhance your business growth.</p>
                                </div>
                            </div>
                            <div className="choose-detail-card">
                                <div className="choose-detail-card-img">
                                    <img src="./three.png" alt="chooselogo" />
                                </div>
                                <div>
                                    <h3>User-Centric Approach</h3>
                                    <p>Focused on delivering custom software solutions to foster a seamless end-user experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="choose-detail-on">
                            <div className="choose-detail-card">
                                <div className="choose-detail-card-img">
                                    <img src="./two.png" alt="chooselogo" />
                                </div>
                                <div>
                                    <h3>Agile-Based Decision Making</h3>
                                    <p>With our value-driven approach, we adhere to the budget, resources, time,
                                        and technology, thereby ensuring a tested and verified tech stack.</p>
                                </div>
                            </div>
                            <div className="choose-detail-card">
                                <div className="choose-detail-card-img">
                                    <img src="./four.png" alt="chooselogo" />
                                </div>
                                <div>
                                    <h3>Consistent Delivery</h3>
                                    <p>We tap into the power of the digital world to deliver timely tech solutions to your
                                        business, creating impactful solutions</p>
                                </div>
                            </div>
                        </div>
                        <div className="choose-detail-two">
                        </div>
                    </div>
                </div>
                <div className="choose-img">
                    <div>
                        <img src="./choose-img-1-92088d78983ecb104cc62c66c21bfd9da3b1912689ef8dcd3c36c972e96bfcde.webp" alt="" />
                        <div className="choose-img-in">
                            <div className="img-one">
                                <img src="./choose-img-2-18c4ce492ebb66c9184ee7d64df9ff9d651d6189952884ef6bf64a512e3f2bdf.webp" alt="" />
                            </div>
                            <div className="img-one">
                                <img src="./choose-img-3-28d74f73d34f56b2002d88540141587ae612550de24f34195cdccde60fb2e364.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Choose;