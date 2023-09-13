import image1 from './assets/images/fof.png';
import neighbors from './assets/images/neighborhood_garage.jpeg';
import cards from './assets/images/cards-against-apathy.png';
import quiz from './assets/images/Coding Quiz Challenge.png';
import password from  './assets/images/password generator.png';
import notetaker from './assets/images/notetaker.png';
import pwaeditor from './assets/images/pwaeditor.png';
import jrf from './assets/images/jrf.png';
const MyProjects =[

    {
        key: 1,
        title: 'Jasmine Rhose Foundation',
        link: ' https://jasminerhose.org/',
        repository:'https://github.com/iwirsing?tab=repositories',
        description: 'Nonprofit REACT Project',
        image:`${jrf}`
    },
    {
        key: 2,
        title: 'Neighborhood Garage',
        link: ' https://neighborhood-garage.herokuapp.com/',
        repository:'https://github.com/JICAalliance/neighborhood-garage',
        description: 'MERN Stack Project on Tool Sharing',
        image:`${neighbors}`
    },
    {
        key: 3,
        title: 'Feast Of Friends',
        link: 'https://feast-of-friends.herokuapp.com/',
        repository:'https://github.com/A-Tribu/feast-of-friends',
        description: 'A potluck organizer app.',
        image:`${image1}`
    },
    {
        key: 4,
        title: 'Cards Against Apathy',
        link: 'https://iwirsing.github.io/Cards-Against-Apathy/',
        repository:'https://github.com/iwirsing/Cards-Against-Apathy',
        description: '\'Gamifying\' exercise.',
        image:`${cards}`
    },
    {
        key: 5,
        title: 'Coding Quiz',
        link: 'https://iwirsing.github.io/Module-4-Challenge-Coding-Quiz-Game/"',
        repository:'https://github.com/iwirsing/Module-4-Challenge-Coding-Quiz-Game',
        description: 'A challenge for coding beginners.',
        image:`${quiz}`
    },
    {
        key: 6,
        title: 'Password Generator',
        link: 'https://iwirsing.github.io/Module-3-Challenge-Password-Generator/',
        repository:'https://github.com/iwirsing/Module-3-Challenge-Password-Generator',
        description: 'Generates secure passwords',
        image:`${password}`
    },
    {
        key: 7,
        title: 'Note Taker',
        link: 'https://note-taker-wirsing.herokuapp.com/',
        repository:'https://github.com/iwirsing/Module-11-Note-Taker',
        description: 'Note taking with Express.',
        image:`${notetaker}`
    },
    {
        key: 8,
        title: 'PWA Just Another Text Editor',
        link: 'https://wirsing-jate.herokuapp.com/',
        repository:'https://github.com/iwirsing/Module-19-PWA-Text-Editor',
        description: 'Text editor that runs in browser and offline.',
        image:`${pwaeditor}`
    },
]

export default MyProjects;