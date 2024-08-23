import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import PaintingPic from '../../assets/images/painting_main_image.jpg';
import DrawingPic from '../../assets/images/drawing_main_image.jpg';
import LiteraturePic from '../../assets/images/literature_main_image.jpg';
import MusicPic from '../../assets/images/music_main_image.jpg';
import SculpturePic from '../../assets/images/sculpture_main_image.jpg';
import TheaterPic from '../../assets/images/theater_main_image.jpg';
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
    const artforms = [
        {id: 'Painting', name: 'Painting', imgSrc: PaintingPic, alt:'painting pic'},
        {id: 'Drawing', name: 'Drawing', imgSrc: DrawingPic, alt:'drawing pic'},
        {id: 'Literature', name: 'Literature', imgSrc: LiteraturePic, alt:'literature pic'},
        {id: 'Music', name: 'Music', imgSrc: MusicPic, alt:'music pic'},
        {id: 'Sculpture', name: 'Sculpture', imgSrc: SculpturePic, alt:'sculpture pic'},
        {id: 'Theater', name: 'Theater', imgSrc: TheaterPic, alt:'theater pic'},
    ];

    return (
        <div className='artform-div'>
            {artforms.map((artform) =>
            <div className='artform-main-button'>
                <img src={artform.imgSrc} alt={artform.alt} className='artform-main-pic' />
                <h3>{artform.name}</h3>
            </div>
            )};
        </div>
    );
}

function ExploreArtButton () {
    return (
        <button className='explore-button'>Explore New Artform</button>
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