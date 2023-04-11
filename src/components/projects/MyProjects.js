import image1 from './assets/images/fof.png';
import neighbors from './assets/images/neighborhood_garage.jpeg';
import cards from './assets/images/cards-against-apathy.png';
import quiz from './assets/images/Coding Quiz Challenge.png';
import password from  './assets/images/password generator.png';
import notetaker from './assets/images/notetaker.png';
import pwaeditor from './assets/images/pwaeditor.png'
const MyProjects =[

    {
        key: 1,
        title: 'Neighborhood Garage',
        link: ' https://neighborhood-garage.herokuapp.com/',
        repository:'https://github.com/JICAalliance/neighborhood-garage',
        description: 'MERN Stack Project on Tool Sharing',
        image:`${neighbors}`
    },
    {
        key: 2,
        title: 'Feast Of Friends',
        link: 'https://feast-of-friends.herokuapp.com/',
        repository:'https://github.com/A-Tribu/feast-of-friends',
        description: 'A potluck organizer app.',
        image:`${image1}`
    },
    {
        key: 3,
        title: 'Cards Againts Apathy',
        link: 'https://the-fighting-mongooses-official.github.io/Cards-Against-Apathy/',
        repository:'https://github.com/The-Fighting-Mongooses-Official/Cards-Against-Apathy',
        description: '\'Gamifying\' exercise.',
        image:`${cards}`
    },
    {
        key: 4,
        title: 'Coding Quiz',
        link: 'https://iwirsing.github.io/Module-4-Challenge-Coding-Quiz-Game/"',
        repository:'https://github.com/iwirsing/Module-4-Challenge-Coding-Quiz-Game',
        description: 'A challenge for coding beginners.',
        image:`${quiz}`
    },
    {
        key: 5,
        title: 'Password Generator',
        link: 'https://iwirsing.github.io/Module-3-Challenge-Password-Generator/',
        repository:'https://github.com/iwirsing/Module-3-Challenge-Password-Generator',
        description: 'Generates secure passwords',
        image:`${password}`
    },
    {
        key: 6,
        title: 'Note Taker',
        link: 'https://note-taker-wirsing.herokuapp.com/',
        repository:'https://github.com/iwirsing/Module-11-Note-Taker',
        description: 'Note taking with Express.',
        image:`${notetaker}`
    },
    {
        key: 7,
        title: 'PWA Just Another Text Editor',
        link: 'https://wirsing-jate.herokuapp.com/',
        repository:'https://github.com/iwirsing/Module-19-PWA-Text-Editor',
        description: 'Text editor that runs in browser and offline.',
        image:`${pwaeditor}`
    },
]

export default MyProjects;