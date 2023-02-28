//import icon styling
import './Contact.module.css'


//import contact form component
import NewContactForm from '../ContactForm';

function ContactPage() {

    return (<div className='container' style={{ minWidth: '20rem', width:"100%",  color: 'red', fontSize: '2rem',margin:'auto' }}>
        {/* <h4>Reach me via</h4> */}
        
                <NewContactForm />

    </div >);
}

export default ContactPage;