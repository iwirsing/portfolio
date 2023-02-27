//import icon styling
import './Contact.module.css'
import linkedIn from '../projects/assets/images/linkedin.png';
import github from '../projects/assets/images/github.png';
import email from '../projects/assets/images/iconemail.png';

//import contact form component
import NewContactForm from '../ContactForm';

function ContactPage() {

    return (<div className='' style={{minWidth:'20rem'}}>
        {/* <h4>Reach me via</h4> */}
     
        <div  className='row'  style={{color:'red',fontSize:'2rem'}} >

            <div className='col-12' >

            
            <NewContactForm/>

            <p className='h4 ' style={{borderRadius: '10px', fontSize:'1rem'}}> &nbsp; &nbsp; Tel: +1 847-558-4015</p>

            
            </div>
           

            <div className='d-flex text-center'>
            <p className="icon linkedin" >
                <a href={"https://www.linkedin.com/in/ivywirsing"} className="icon linkedin" target="_blank" alt="linkedin icon with word in" style={{color:'red'}} rel="noopener noreferrer">
                    <img className="icon linkedin" src={linkedIn} style={{height:'4em', width:'4em'}} alt='LinkedIn Link'></img></a>
            </p>
            <p>
                <a className="icon github" href={"https://github.com/iwirsing"} target="_blank" alt="github icon with a cat silhouette " style={{color:'red'}} rel="noopener noreferrer">
                <img  src={github} style={{height:'4em', width:'4em'}} alt='Github Link'></img></a>

            </p>
            <p>
                <a className="icon email" href={"mailto:ivymolina@gmail.com"} target="_blank" alt="email icon with envelope" style={{color:'red'}} rel="noopener noreferrer">
                <img src={email} style={{height:'4em', width:'4em'}} alt='Email Link'></img></a>
               

            </p >

            </div>


           
           
        </div >
        
    </div >);
}

export default ContactPage;