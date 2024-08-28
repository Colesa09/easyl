import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import TipLogo from '../../assets/logo/tip_logo.png';
import './TipsPage.css';


function TipCard () {

    
    return (
        <div className='tip-card'>
            <img src={TipLogo} alt='Tip Logo' className='tip-logo' />
            <h3>Easyl Tip #</h3>
            <p>Content Here</p>
        </div>
    )
}


function TipsPage() {
    
    return (
      <>
        <Header />
        <div className='main'>
            <h2>Tips</h2>
            <div className='tips-outer-div'>
                <TipCard />
                <TipCard />
                <TipCard />
                <TipCard />
            </div>
        </div>
        <Footer />
      </>
      
    );
  }

  export default TipsPage;