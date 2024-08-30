import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import SlideOne from '../../assets/images/explore-slide-1.png';
import SlideTwo from '../../assets/images/explore-slide-2.png';
import SlideThree from '../../assets/images/explore-slide-3.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ExplorePage.css';


const properties = {
  prevArrow: <button className='arrowLeft'><FontAwesomeIcon icon={faAngleUp} size= '4x' /></button>,
  nextArrow: <button className='arrowRight'><FontAwesomeIcon icon={faAngleUp} size='4x' /></button>
}


const slideImages = [
  {
    imgSrc: SlideOne,
    caption: 'Slide 1'
  },
  {
    imgSrc: SlideTwo,
    caption: 'Slide 2'
  },
  {
    imgSrc: SlideThree,
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <img src={slideImage.imgSrc} alt='' className='explore-slide' />
            </div>
          ))} 
        </Slide>
      </div>
    )
}



function ViewMoreTutorials () {
    return (
        <button className='explore-button'>View More Tutorials</button>
    )
}

function ExplorePage() {
    
    return (
      <>
        <Header />
        <div className='main'>
            <h2>Explore Latest Tutorials</h2>
            
              <Slideshow />

            <ViewMoreTutorials />
        </div>
        <Footer />
      </>
      
    );
  }

  export default ExplorePage;