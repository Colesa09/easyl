import React from "react";
import FooterLogo from '../../assets/logo/other_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { fa } from '@fortawesome/free-regular-svg-icons';
//import { faRegular } from '@fortawesome/free-regular-svg.icons';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <img src={FooterLogo} alt='logo' className='footerLogo'/>
            <div className='extraLinks'>
                <p>Other links to pages will be here</p>
            </div>
            <div className='footerIcons'>
                <p><FontAwesomeIcon icon={faFacebook} size ='3x' className='icon-color-change' /></p>
                <p><FontAwesomeIcon icon={faPinterest} size ='3x' className='icon-color-change' /></p>
                <p><FontAwesomeIcon icon={faInstagram} size ='3x' className='icon-color-change' /></p>
            </div>
            
        </footer>
    );
}

export default Footer;