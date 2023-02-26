function ContactPage() {

    return (<div className='container' >
        {/* <h4>Reach me via</h4> */}
        
        <div style={{color:'red',fontSize:'2rem'}}>
            <p>
                <a href={"https://www.linkedin.com/in/ivywirsing"} target="_blank" alt="linkedin icon with word in" style={{color:'red'}} rel="noopener noreferrer">
                    <div class="linkedin icon">LinkedIn</div></a>
            </p>
            <p>
                <a href={"https://github.com/iwirsing"} target="_blank" alt="github icon with a cat silhouette " style={{color:'red'}} rel="noopener noreferrer"><div class="github icon">Github</div></a>

            </p>
            <p>
                <a href={"mailto:ivymolina@gmail.com"} target="_blank" alt="email icon with envelope" style={{color:'red'}} rel="noopener noreferrer"><div class="email icon">Email</div></a>

            </p >
            <p style={{borderRadius: '10px', fontSize:'2rem'}}>Tel. No.: +1 847-558-4015</p>
        </div >
        
    </div >);
}

export default ContactPage;