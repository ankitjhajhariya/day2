import React from "react";
import "./CompanyCulture.scss";


const CompanyCulture = () => {
    return (
        <section className="company-culture">
            <h2>Our Company Culture</h2>
            <p>
                At our company, we foster a culture of dedicated technology enthusiasts and developers who not only take their work seriously
                but also find joy in it both on and off the job.
            </p>
            <div className="culture-grid">
                <div className="img-left">
                    <div className="img-left-top">
                        <img src="https://www.w3villa.com/production/assets/pages/about/culture-1-dfc37fdd5ec428395c5353fe5327d7332a5cd3eadb1e2782fcf0ed9afb5ac50e.webp" alt="" />
                    </div>
                    <div className="img-left-bottom">
                        <img src="https://www.w3villa.com/production/assets/pages/about/culture-6-818632f279271bd17de0d70d27e6292d7d46b6a77b7eef5e13209df76fcc4445.webp" alt="" />
                    </div>
                </div>
                <div className="img-right">
                    <div className="img-right-top">
                        <div className="img-right-top-left">
                            <img src="https://www.w3villa.com/production/assets/pages/about/culture-2-62961c33088a24c5163e585ef12486c50810d99e19df2cdb03d72e463967cf7d.webp" alt="" />
                        </div>
                        <div className="img-right-top-mid">
                            <img src="https://www.w3villa.com/production/assets/pages/about/culture-3-8db6c74f3cc638547b9574c3cba1a5a2f4c1ba0243f1dc2a48a421a2486d8760.webp" alt="" />
                        </div>
                        <div className="img-right-top-right">
                            <div className="img-right-top-right-top">
                                <img src="https://www.w3villa.com/production/assets/pages/about/culture-4-6197843ce8e5755fe83bade6e6f97b9d40e323fb30972cf7dcebc0d0386d741d.webp" alt="" />
                            </div>
                            <div className="img-right-top-right-bottom">
                                <img src="https://www.w3villa.com/production/assets/pages/about/culture-5-966fdf0748bba82f83959c1a754c32544c9b2f7c72ddcf99ff34b42ce54b68d5.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="img-right-bottom">
                        <div className="img-right-bottom-left">
                            <img src="https://www.w3villa.com/production/assets/pages/about/culture-7-1e7e4d55272cda44b6e60d11b927f5c88cc23937663713433fbf61348aefcb37.webp" alt="" />
                        </div>
                        <div className="img-right-bottom-right">
                            <img src="https://www.w3villa.com/production/assets/pages/about/culture-8-0c42ac16ca651df7cb0dd635e5123cd616b1bd9fe6f5056de5ab345797f24bf1.webp" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyCulture;
