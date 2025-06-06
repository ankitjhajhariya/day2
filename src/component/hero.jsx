import React from 'react';
import Button from './button';
import './hero.scss';

function Hero() {
    return (
        <>
            <div className='herocont'>
                <div className='herost'>
                    <div className='des'>
                        <h1>Our digital solution
                            helps companies to
                            scale their business</h1>
                        <p>We have built enormous solutions for startups and
                            enterprise across the world</p>
                        <Button text="See our work" icon={<i class="fa-solid fa-arrow-up-right-from-square"></i>} bg='#4169E1' col='white'></Button>
                    </div>
                    <div>
                        <img src="https://www.w3villa.com/production/assets/landing_page/banner_2_digital-12d2a65725612b69be142e6653792f0d7981dc0fcd1d35cc4ceabc15278efbca.webp" alt="hero img" />
                    </div>
                </div>
                <div className="heroend">
                    <div>
                        <div><img src="https://www.w3villa.com/production/assets/landing_page/adobe-4-5a6302ef3237aafcb0f7832df87b62a29284f52af943a4aea920903c4cce6c9d.png" alt="" /></div>
                    </div>
                    <div>
                        <img src="https://www.w3villa.com/production/assets/landing_page/aws-4-52d80c8eec25f6cb354e51438fff2b69cd59d1a0368f5461553a990759bf4e0d.png" alt="" />
                    </div>
                    <div>
                        <img src="https://www.w3villa.com/production/assets/landing_page/new-relic-4-1ec5ce3f4cf08b4db0ff61df3d6a8bb0d84709a6e333ddaaad454dee91945ccb.png" alt="" />
                    </div>
                    <div>
                        <img src="https://www.w3villa.com/production/assets/landing_page/gorgias-4-2b8fac76ade5e9f07b89dfdecbccb8526f911ef4182b54a742fad3c71d7f7ad1.png" alt="" />
                    </div>
                </div>

            </div>

        </>
    );
}

export default Hero;

