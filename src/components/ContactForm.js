
import classes from './ContactForm.module.css'
import { useRef } from 'react';
import {send} from '@emailjs/browser';

function NewContactForm(props) {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();



    function submitHandler(event) {
        event.preventDefault();
        //reading value useRef
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;
        const submitBtn = document.getElementById('send');
        submitBtn.innerHTML = 'SENT!'

        //constants for emailJS
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;
        const myNummer = process.env.REACT_APP_MY_NUMBER;

        
        const templateParams = {
            from_name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        };

        send(serviceID, templateID, templateParams, myNummer);

        setInterval(() =>
        submitBtn.innerHTML = 'Send' , 3000);
        

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>

            <div className={classes.control + ' form-group row'}>

                <label className='col-sm-3 col-form-label' htmlFor='name'>
                    Name
                </label>
                <div className='col-sm-9'>
                    <input type='text' required id='name' ref={nameInputRef} placeholder='Name required' style={{ fontStyle: 'italic' }} />
                </div>

            </div>
            <div className={classes.control + '  form-group row'}>
                <label className='col-sm-3 col-form-label' htmlFor='email'  >Email</label>

                <div className='col-sm-9'>
                    <input type='email' required id='email' ref={emailInputRef} placeholder='Email required' style={{ fontStyle: 'italic' }} />
                </div>

            </div>
            <div className={classes.control + ' form-group row'}>
                <label className='col-sm-3 col-form-label' htmlFor='message'>Message</label>
                <div className='col-sm-9'>
                    <textarea type='text' required id='message' rows='7' ref={messageInputRef} placeholder='Message required' style={{ fontStyle: 'italic' }} />
                </div>
            </div>
            <div className={classes.actions + ' text-center'}>
                <button id='send'>Send</button>
            </div>

        </form>
 );
}

export default NewContactForm;