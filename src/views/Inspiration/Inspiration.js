import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import InspirationImage from '../../assets/images/inspiration_main-image.jpg';
import './Inspiration.css';




function InspirationPage() {
    
    return (
      <>
        <Header />
        <div className='main'>
            <h2>Inspiration</h2>
            <img src={InspirationImage} alt='inspiration pic' className='inspiration-main-image'/>

            <div className='inspiration-main-content'>
                <div className='inspiration-content'>
                    <h3>Title</h3>
                    <p>Paragraph stating title of content</p>
                </div>
                <div className='inspiration-content'>
                    <h3>About the Artist</h3>
                    <p>Paragraph describing information about the artist of the content</p>
                </div>
            </div>
           
        </div>
        <Footer />
      </>
      
    );
  }

  export default InspirationPage;