//import icon styling
import './Contact.module.css'


//import contact form component
import NewContactForm from '../ContactForm';

function ContactPage() {

    return (<div lassName='progress' style={{ height: '100%', overflowY: 'scroll', backgroundColor: 'white', topMargin:'3rem', minWidth: '100%'}}>
        {/* <h4>Reach me via</h4> */}
        
                <NewContactForm />

    </div >);
}

export default ContactPage;