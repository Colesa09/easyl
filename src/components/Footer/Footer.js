import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from '../../assets/logo/other_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { fa } from '@fortawesome/free-solid-svg-icons';
//import { faRegular } from '@fortawesome/free-regular-svg.icons';
import Artforms from "../../views/ArtformPages/ArtformsData";
import './Footer.css';

function Footer() {

    function FooterLink() {
        return (

              <ul>
                {Artforms.map((nav) => 
                    <li key={nav.id}>
                        <Link to={`/${nav.path}`}>{nav.name}</Link>
                    </li>
                )}
            </ul>
     
        );
    }

    return (
        <footer>
            <Link to='/'><img src={FooterLogo} alt='logo' className='footerLogo'/></Link>
            <div className='footer-links'>
                <FooterLink />
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