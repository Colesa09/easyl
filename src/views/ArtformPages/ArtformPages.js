import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Artforms from './ArtformsData.js';
import { TipCard } from '../TipsPage/TipsPage.js';
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

    return (
        <>
            <Header />
            <div className='main artform-page'>
                <ArtformBanner />
                <ArtformGallery />
                <div className='artformNav'>

                </div>
                <div className='artform-tip-card'>
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
