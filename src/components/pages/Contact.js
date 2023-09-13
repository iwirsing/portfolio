//import icon styling
import './Contact.module.css'


//import contact form component
import NewContactForm from '../ContactForm';

function ContactPage() {

    return (<div  style={{ height: '100%', overflowY: 'scroll', backgroundColor: 'white', minWidth: '100%'}}>
        {/* <h4>Reach me via</h4> */}
        
                <NewContactForm />

    </div >);
}

export default ContactPage;