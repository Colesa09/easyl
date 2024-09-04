//Artform data page.
//Images used as the main content images for each artform on homepage and on artform indiviudal description page.
import PaintingPic from '../../assets/images/painting_main_image.jpg';
import DrawingPic from '../../assets/images/drawing_main_image.jpg';
import LiteraturePic from '../../assets/images/literature_main_image.jpg';
import MusicPic from '../../assets/images/music_main_image.jpg';
import SculpturePic from '../../assets/images/sculpture_main_image.jpg';
import TheaterPic from '../../assets/images/theater_main_image.jpg';

//Painting Gallery import
const imagesPainting = require.context('../../assets/images/painting-page-pic', false, /\.(png|jpe?g|svg)$/);
const imageListPainting = imagesPainting.keys(imagesPainting).map(image => imagesPainting(image));
//Drawing Gallery import
const imagesDrawing = require.context('../../assets/images/drawing-page-pic', false, /\.(png|jpe?g|svg)$/);
const imageListDrawing = imagesDrawing.keys(imagesDrawing).map(image => imagesDrawing(image));
//Literature Gallery import
const imagesLiterature = require.context('../../assets/images/literature-page-pic', false, /\.(png|jpe?g|svg)$/);
const imageListLiterature = imagesLiterature.keys(imagesLiterature).map(image => imagesLiterature(image));
//Music Gallery import
const imagesMusic = require.context('../../assets/images/music-page-pic', false, /\.(png|jpe?g|svg)$/);
const imageListMusic = imagesMusic.keys(imagesMusic).map(image => imagesMusic(image));
//Sculpture Gallery import
const imagesSculpture = require.context('../../assets/images/sculpture-page-pic', false, /\.(png|jpe?g|svg)$/);
const imageListSculpture = imagesSculpture.keys(imagesSculpture).map(image => imagesSculpture(image));
//Theater Gallery import
const imagesTheater = require.context('../../assets/images/theater-page-pic', false, /\.(png|jpe?g|svg)$/);
const imageListTheater = imagesTheater.keys(imagesTheater).map(image => imagesTheater(image));

//Export Artforms array of objects
const Artforms = [
    {id: 'painting', name: 'Painting', imgSrc: PaintingPic, alt:'painting pic', path: 'artforms/painting',
        description: 'Painting is a visual art, which is characterized by the practice of applying paint, pigment, color or other medium to a solid surface.',
        gallery: imageListPainting
    },
    {id: 'drawing', name: 'Drawing', imgSrc: DrawingPic, alt:'drawing pic', path: 'artforms/drawing',
        description: 'Drawing is a visual art that uses an instrument to mark paper or another two-dimensional surface.',
        gallery: imageListDrawing
    },
    {id: 'literature', name: 'Literature', imgSrc: LiteraturePic, alt:'literature pic', path: 'artforms/literature',
        description: 'Literature is any collection of written work, but it is also used more narrowly for writings specifically considered to be an art form, especially novels, plays, and poems.',
        gallery: imageListLiterature
    },
    {id: 'music', name: 'Music', imgSrc: MusicPic, alt:'music pic', path: 'artforms/music',
        description: 'Music is the arrangement of sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content.',
        gallery: imageListMusic
    },
    {id: 'sculpture', name: 'Sculpture', imgSrc: SculpturePic, alt:'sculpture pic', path: 'artforms/sculpture',
        description: 'Sculpture is the branch of the visual arts that operates in three dimensions: height, width and depth.',
        gallery: imageListSculpture
    },
    {id: 'theater', name: 'Theater', imgSrc: TheaterPic, alt:'theater pic', path: 'artforms/theater',
        description: 'Theatre or theater is a collaborative form of performing art that uses live performers, usually actors or actresses, to present experiences of a real or imagined event before a live audience in a specific place, often a stage.',
        gallery: imageListTheater
    },
];

export default Artforms;