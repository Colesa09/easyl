import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Artforms from '../ArtformPages/ArtformsData.js';
import './HomePage.css';


function Banner() {
    return (
        <div className="banner">
            <h1>Creativity Doesn't Need Limits</h1>
            <p>Learn, create and grow <br/> your creative spark with Easyl.</p>
        </div>
    );
    
}

function ArtFormButtons() {
    const navigate = useNavigate();

    return (
        <div className='artform-outer-div'>
            {Artforms.map((artform) =>
            <button type='button' className='artform-main-card' onClick={() => navigate(artform.path)}>
                <img src={artform.imgSrc} alt={artform.alt} className='artform-main-pic' />
                <h3>{artform.name}</h3>
            </button>
            )};
        </div>
    );
}

function ExploreArtButton () {
    const navigate = useNavigate();
    
    return (
        <button type='button' className='explore-button' onClick={() => navigate('artforms')}>Explore New Artform</button>
    )
}


function HomePage() {
    
    return (
      <>
        <Header />
        <Banner />
        <div className='main'>
            <h2>Select Your Artform</h2>
            <ArtFormButtons />
            <ExploreArtButton />
        </div>
        <Footer />
      </>
      
    );
  }

  export default HomePage;