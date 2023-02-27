
import classes from './ContactForm.module.css'
import {useRef} from 'react';

function NewContactForm(props) {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();



    function submitHandler(event) {
        event.preventDefault();
        //reading value useRef
        const enteredName=nameInputRef.current.value;
        const enteredEmail=emailInputRef.current.value;
        const enteredMessage=messageInputRef.current.value;

        const contactData ={
            name: enteredName,
            image: enteredEmail,
            message: enteredMessage
        };

        //logs input at contact form
        console.log(contactData);

        // props.onAddMeetup(meetupData);

    }

    return <div>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' required id='name' ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' required id='email' ref={emailInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Message</label>
                <textarea type='text' required id='message' rows='5' ref={messageInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Send</button>
            </div>

        </form>
    </div>
}

export default NewContactForm;