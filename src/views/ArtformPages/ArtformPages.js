import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import TipLogo from '../../assets/logo/tip_logo.png';
import Artforms from './ArtformsData.js';
import { tipDetails } from '../TipsPage/TipsPage.js';
import './ArtformPages.css';



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

    function ArtformGallery() {
        let videoGallery = Artforms[artform].gallery;
        return (
            <div className='artform-video-gallery'>
                {videoGallery.map((video) =>
                    <img src={video} alt='' className='artform-video' />
                )}
                
            </div>
        );
    }

    
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
    
        return (
            <>
                <Header />
                <div className='main'>

                </div>
                <Footer />
            </>
        )

}
