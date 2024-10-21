import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import '../ArtformPage/ArtformPage.css';
import './TutorialPage.css';

//Due to the application not being set up with a full gallery of videos. A artformVideos array of objects was made to link that links
//to one video. Each picture listed on the indiviual artform page will link to the same video. 

function TutorialPage() {

    const artformVideos = [
        {id: 'painting', 
            name: 'Learn to Paint: A Step-by-Step Acrylic Landscape Tutorial', 
            url: 'https://www.youtube.com/embed/jQlvCpSwQTE?si=KlZcRUxYUn0e5YCk',
            supplies: ['Palette', 'Canvas', 'Colours', 'Paintbrushes']
        },
        {id: 'drawing', 
            name: 'Drawing Tutorial: "Master the Basics of Portrait Drawing', 
            url: 'https://www.youtube.com/embed/ewMksAbgdBI?si=uX4pohUvRdw5_bVq',
            supplies: ['SketchBook', 'Pencils', 'Eraser', 'Pencil Sharpener', 'Blending Stumps','Sand Paper', 'Optional: Shades of Grey Markers']
        },
        {id: 'literature', 
            name: 'Literature Tutorial: "Creative Writing: Crafting Your First Short Story', 
            url: 'https://www.youtube.com/embed/pRBhZpdnAa8?si=jb1itsrG2mt95GR6',
            supplies: ['Notebook or Computer', 'Pencil or Pen', 'Space to Think', 'Imagination']
        },
        {id: 'music', 
            name: 'Music Tutorial: "Introduction to Piano Playing: Learn Your First Song', 
            url: 'https://www.youtube.com/embed/9U61gnK8JEk?si=LMDh-nK5wba11ILN',
            supplies: ['Instrument of Choice (Piano)', 'Sheet Music', 'Positive Energy']
        },
        {id: 'sculpture', 
            name: 'Sculpture Tutorial: "Create a Clay Sculpture: Step-by-Step for Beginners', 
            url: 'https://www.youtube.com/embed/1n7apcgQiz0?si=tEbgNxvNLuhXOobZ',
            supplies: ['Sculpting Tool Set', 'Sculpting Material', 'Flat Surface']
        },
        {id: 'theater', 
            name: 'Theater Tutorial: "Introduction to Acting: Building Confidence on Stage', 
            url: 'https://www.youtube.com/embed/GGl9Wri70aQ?si=hin0z0WyGzIw-GYL',
            supplies: ['You', 'Script']
        },

    ];

    const params = useParams();
    const navigate = useNavigate();
    let artform = artformVideos.find((video) => video.id === params.id);
    
    

    return (
        <>
            <Header />
            <div className='main'>
                <h2>{artform.name}</h2>
                <div className= 'tutorial-page'>
                    <div className='tutorial-video'>
                        <iframe width="700" height="415" src={artform.url} title="YouTube video player" 
                        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                    <div className= 'supplies-list'>
                        <h2>Supply List</h2>
                            <ul>
                                {artform.supplies.map((supply) => <li>{supply}</li>)}
                            </ul>
                        <p><i>Video is being used solely for demo on website.</i></p>
                    </div>
                    <div className='tutorial-buttons'>
                        <button type='button' className='tut-button' >Ask A Question</button> 
                        <button type='button' className='tut-button' onClick={() => navigate(`/artforms/${params.id}`)}>View Similar Tutorials</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

        
    )

    
}

export default TutorialPage;