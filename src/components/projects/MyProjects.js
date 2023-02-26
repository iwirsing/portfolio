import image1 from './assets/images/fof.png'
import cards from './assets/images/cards-against-apathy.png'
import quiz from './assets/images/Coding Quiz Challenge.png'
import password from  './assets/images/password generator.png'
const MyProjects =[

    {
        key: 1,
        title: 'Feast Of Friends',
        link: 'https://feast-of-friends.herokuapp.com/',
        description: 'potluck organizer',
        image:`${image1}`
    },
    {
        key: 2,
        title: 'Cards Againts Apathy',
        link: 'https://the-fighting-mongooses-official.github.io/Cards-Against-Apathy/',
        description: '\'gamifying\' exercise',
        image:`${cards}`
    },
    {
        key: 3,
        title: 'Coding Quiz',
        link: 'https://iwirsing.github.io/Module-4-Challenge-Coding-Quiz-Game/"',
        description: 'a challenge for coding beginners',
        image:`${quiz}`
    },
    {
        key: 4,
        title: 'Password Generator',
        link: 'https://iwirsing.github.io/Module-3-Challenge-Password-Generator/',
        description: 'generating secure passwords',
        image:`${password}`
    },
]

export default MyProjects;