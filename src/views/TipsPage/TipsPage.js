import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import TipLogo from '../../assets/logo/tip_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './TipsPage.css';


export const tipDetails = [
    {id: 0, details: 'The earliest known drawing dates back to 30,000 years ago!', category: 'drawing'},
    {id: 1, details: 'Drawing can help you improve your focus and concentration.', category: 'drawing'},
    {id: 2, details: 'Drawing and doodling can help you remember information better.', category: 'drawing'},
    {id: 3, details: 'There are over 250 types of drawing materials you can use to create your masterpiece, including pencils, pens, crayons, pastels, charcoal, and more!', category: 'drawing'},
    {id: 4, details: 'Drawing is a great way to express yourself and have fun at the same time!', category: 'drawing'},
    {id: 5, details: 'The earliest known oil paintings were found in Afghanistan.', category: 'painting'},
    {id: 6, details: 'Face and body paint signals social status in many African cultures.', category: 'painting'},
    {id: 7, details: 'Painting used to be an Olympic sport.', category: 'painting'},
    {id: 8, details: 'Spray paint was invented in the 1949!', category: 'painting'},
    {id: 9, details: 'Paint didn’t come in a can until Sherwin Williams introduced the first “ready-to-use” paints in 1866. Before that, paint was mixed together as needed from a variety of materials.', category: 'painting'},
    {id: 10, details: 'Music can help improve memory, attention span, language, literacy, spatial reasoning, and speech perception', category: 'music'},
    {id: 11, details: 'The oldest known musical instrument is 50,000 years old', category: 'music'},
    {id: 12, details: 'Researchers have found that listening to music of any kind can deliver excellent benefits to your cardiovascular health.', category: 'music'},
    {id: 13, details: 'Singing can significantly reduce stress. It is also a psychological impact of listening to music and singing. ', category: 'music'},
    {id: 14, details: 'Franz Liszt, a Hungarian composer from the 1840s is considered the first-ever rockstar, bringing audiences to a frenzy called Lisztomania.', category: 'music'},
    {id: 15, details: 'The word "thespian" comes from Thespis, the first person to perform on stage in ancient Greece.', category: 'theater'},
    {id: 16, details: 'The first genres of theater were comedy, satire, and tragedy.', category: 'theater'},
    {id: 17, details: 'Shakespeare is often referred to as the greatest playwright in theatre history.', category: 'theater'},
    {id: 18, details: 'The Phantom of the Opera is the longest-running Broadway show.', category: 'theater'},
    {id: 19, details: 'Improvisation is a key element in the art of theatre.', category: 'theater'},
    {id: 20, details: 'The word literature comes from the Latin literatura, which means "learning, writing, grammar".', category: 'literature'},
    {id: 21, details: 'Literature can be written, visual, or oral. Some examples of literature include fiction and nonfiction prose, poetry, drama, and folktales.', category: 'literature'},
    {id: 22, details: 'Literature can help people understand themselves, their lives, and the world around them.', category: 'literature'},
    {id: 23, details: 'The Guinness Book of Records is the most stolen book, with an average of 14 copies stolen per library each year.', category: 'literature'},
    {id: 24, details: 'Saeed Rashed AlMheiri was only 4 years old when he published his childrens book "Saeed the Elephant and the Bear" by the Kalimat publishing house in 2022.', category: 'literature'},
    {id: 25, details: 'Ancient Greek statues were often copied in stone, and many of the originals are now lost.', category: 'sculpture'},
    {id: 26, details: 'Sculpture has been used as a form of human expression since prehistoric times, and has been associated with religion.', category: 'sculpture'},
    {id: 27, details: 'For the artist, sculpting can provide a therapeutic outlet for expressing emotions, reducing stress, and promoting mindfulness.', category: 'sculpture'},
    {id: 28, details: 'Each sculpting material requires specific tools to shape and manipulate it effectively.', category: 'sculpture'},
    {id: 29, details: 'Computer-aided design (CAD) software and 3D printing have opened up new possibilities for artists, allowing them to create intricate and complex sculptures with precision and efficiency.', category: 'sculpture'},
];


function TipsPage() {
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
            <h2>Tips</h2>
            <div className='tips-outer-div'>
            {tipDetails.map((tip) =>
                    <div className='tip-card' key={tip.id}>
                        <img src={TipLogo} alt='Tip Logo' className='tip-logo' />
                        <h3>Easyl Tip: {tip.category.toUpperCase()}</h3>
                        <p>{tip.details}</p>
                    </div>
                )} 
            </div>
            <ScrollUpArrow />
        </div>
        <Footer />
      </>
      
    );
  }

  export default TipsPage;