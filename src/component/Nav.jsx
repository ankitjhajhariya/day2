import React from 'react';
import Button from './button';
function Nav() {
    return (
        <header className='navi'>
            <img src="https://www.w3villa.com/production/assets/logo-1-0cf06f8aef88f5778904cc40290b18da01c6cf5bff74594cb3b2fc4d0a353acf.webp" alt="logo" />
            <span>Artificial Intelligence</span>
            <span>Services</span>
            <span>Technologies</span>
            <span>Solutions</span>
            <span>Company</span>
            <span>Career</span>
            <span>Blog</span>
            <span><Button text="ENQUIRY" /></span>
        </header>
    );
}

export default Nav;

