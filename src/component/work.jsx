import React from "react";

function Work(params) {
    return (
        <>
            <div className="work-cont">
                <div className="work-content">
                    <h2>W3villa Technologies follow
                        the agile methodology</h2>
                    <p>Game-changing ideas that will improve the overall online web experience. Our skilled developers can solve
                        complex business logic. We achieve this by following a simple approach- Design It! Track It! Run It!</p>
                    <div className="work-detail">
                        <div className="work-detail-on">
                            <div className="work-detail-card">
                                <div className="work-detail-card-img">
                                    <img src="./Wone.png" alt="worklogo" />
                                </div>
                                <div>
                                    <h3>DESIGN IT!</h3>
                                    <p>Understanding key stakeholders & their expectations to analyze the right solution that
                                        can be delivered to solve multiple perspectives.</p>
                                </div>
                            </div>
                            <div className="work-detail-card">
                                <div className="work-detail-card-img">
                                    <img src="./Wtwo.png" alt="worklogo" />
                                </div>
                                <div>
                                    <h3>TRACK IT!</h3>
                                    <p>Use of Test Driven Development / Behaviour-driven Development approach. Tracking the
                                        progress via an in-house issue tracking tool.</p>
                                </div>
                            </div>
                            <div className="work-detail-card">
                                <div className="work-detail-card-img">
                                    <img src="./Wthree.png" alt="worklogo" />
                                </div>
                                <div>
                                    <h3>RUN IT!</h3>
                                    <p>Managing the security and robustness of your application. Real-time monitoring,
                                        automated backups, auto load-balancer are the addons.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Work;
