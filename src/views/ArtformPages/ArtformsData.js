//Artform data page.
//Images used as the main content images for each artform on homepage and on artform indiviudal description page.
import PaintingPic from '../../assets/images/painting_main_image.jpg';
import DrawingPic from '../../assets/images/drawing_main_image.jpg';
import LiteraturePic from '../../assets/images/literature_main_image.jpg';
import MusicPic from '../../assets/images/music_main_image.jpg';
import SculpturePic from '../../assets/images/sculpture_main_image.jpg';
import TheaterPic from '../../assets/images/theater_main_image.jpg';



const imagesDrawing = require.context('../../assets/images/drawing-page-pic', false, /\.(png|jpe?g|svg)$/);
const imageListDrawing = imagesDrawing.keys(imagesDrawing).map(image => imagesDrawing(image));

const Artforms = [
    {id: 'painting', name: 'Painting', imgSrc: PaintingPic, alt:'painting pic', path: 'artforms/painting',
        gallery: []
    },
    {id: 'drawing', name: 'Drawing', imgSrc: DrawingPic, alt:'drawing pic', path: 'artforms/drawing',
        gallery: imageListDrawing
    },
    {id: 'literature', name: 'Literature', imgSrc: LiteraturePic, alt:'literature pic', path: 'artforms/literature',
        gallery: []
    },
    {id: 'music', name: 'Music', imgSrc: MusicPic, alt:'music pic', path: 'artforms/music',
        gallery: []
    },
    {id: 'sculpture', name: 'Sculpture', imgSrc: SculpturePic, alt:'sculpture pic', path: 'artforms/sculpture',
        gallery: []
    },
    {id: 'theater', name: 'Theater', imgSrc: TheaterPic, alt:'theater pic', path: 'artforms/theater',
        gallery: []
    },
];

export default Artforms;