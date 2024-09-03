import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Artforms from './ArtformsData.js';
import './ArtformPages.css';



function ArtformPage() {
    const params = useParams();
    let findArtform = (art) => art.id === params.id;
    let artform = Artforms.findIndex(findArtform);

    function ArtformBanner() {
        return (
            
            <div className='artform-banner'>
                <img src={Artforms[artform].imgSrc} alt={Artforms[artform].alt} className='artform-main-pic' />
                <h3>{Artforms[artform].name}</h3>
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

            </div>
            <Footer />
        </>
    )
}

export default ArtformPage;