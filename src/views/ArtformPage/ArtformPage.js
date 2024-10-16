import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import TipLogo from '../../assets/logo/tip_logo.png';
import Artforms from './ArtformsData.js';
import { tipDetails } from '../TipsPage/TipsPage.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ArtformPage.css';

//This file consist of two exported function. One for the indiividual artfrom page that is loaded based on clicking specific artform.
//The other function load the Gallery page using all the pictures(videos) available from the ArtformsData.js file. 

export function ArtformPageInd() {
    const params = useParams();
    let findArtform = (art) => art.id === params.id;
    let artform = Artforms.findIndex(findArtform);

    function ArtformBanner() {
        return (
            
            <div className='artform-banner'>
                <h3>{Artforms[artform].name}</h3>
                <img src={Artforms[artform].imgSrc} alt={Artforms[artform].alt} className='artform-page-pic' />
                <p>{Artforms[artform].description}</p>
            </div>
     
        );
    }
//Loades pictures(videos) of artforms based on the params id. Goes to the artformsData.js file to locate object that matches params id.
    function ArtformGallery() {
        let videoGallery = Artforms[artform].gallery;
        return (
            <div className='artform-video-gallery'>
                {videoGallery.map((video) =>
                    <Link to={`${video.path}`} >
                        <img src={video.url} alt='' className='artform-video' key={video.id} />
                    </Link>
                )}
                
            </div>
        );
    }

 //Uses the tipDetails array to filter down tips that are related to the artform page based on the params id.    
     function TipCard() {
        const params = useParams();
        let filteredTips = tipDetails.filter((tips) => tips.category === params.id);
        let artformTip = filteredTips[Math.floor(Math.random()*5)];

         return (
            <div className='artform-tip-card' key={artformTip.id}>
                <img src={TipLogo} alt='Tip Logo' className='tip-logo' />
                <h3>Easyl Tip: {artformTip.category.toUpperCase()}</h3>
                <p>{artformTip.details}</p>
            </div>
        );
     }

    return (
        <>
            <Header />
            <div className='main artform-page'>
                <ArtformBanner />
                <ArtformGallery />
                <div className='artform-tip-outer'>
                    <TipCard />
                </div>
                

            </div>
            <Footer />
        </>
    )
}



export default function ArtformPage() {

    function ScrollUpArrow() {
        const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }

        return (
            <div className='scroll-up-arrow'>
                <button className='up-button' onClick={handleScrollToTop} >
                    <FontAwesomeIcon icon={faArrowUp} size='3x' className='change-color' />
                </button>
            </div>
        )
    }
    
            

    
    return (
        <>
            <Header />
            <div className='main'>
                <div className='artform-page-gallery'>
                
                 {Artforms.map((artform) =>
                    artform.gallery.map((video) => 
                    <div className='gallery-item'>
                        <Link to={`${artform.name.toLowerCase()}/${video.path}`} >
                            <img src={video.url} alt={video.alt} key={video.id} className='full-gallery-video'/>
                        </Link>
                        <div className='full-gallery-content'>
                                <h3>{video.title}</h3>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))} 
                </div>
                <ScrollUpArrow />
            </div>
            <Footer />
        </>
    )

}
