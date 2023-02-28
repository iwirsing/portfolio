//import icon styling
import './Contact.module.css'
// import linkedIn from '../projects/assets/images/linkedin.png';
// import github from '../projects/assets/images/github.png';
import email from '../projects/assets/images/iconemail.png';

//import contact form component
import NewContactForm from '../ContactForm';

function ContactPage() {

    return (<div className='' style={{ minWidth: '20rem', width:"100%",  color: 'red', fontSize: '2rem' }}>
        {/* <h4>Reach me via</h4> */}
        
                <NewContactForm />

    </div >);
}

export default ContactPage;