import React from 'react';
import ivy from '../projects/assets/images/ivy1.png'



function HomePage() {

    return <div className=' row  align-middle text-center'>

        <div className='col-12 col-sm-5'>
            <h6></h6>
            <img className='img-fluid profile shadow-lg p-3 mb-5 bg-body rounded-pill border ' style={{backgroundColor:'#C8B3A7'}} src={ivy} alt='Ivy'></img>

        </div>
        <div className='col-12 col-sm-6 align-middle'>
          <p></p>

            <p style={{fontSize:'.8rem'}}>Hi, my name is</p>
            <h2>Ivy Wirsing</h2>
            <p style={{fontSize:'1rem'}}>I am a developer based in Chicago. I enjoy being active. I love to garden and make things happen. And just like the possibilities of the big outdoors... </p>
            <p style={{color:'#9C030C', fontWeight:'bolder'}}>I'd love to code for you!</p>

            <p style={{fontSize:'1rem'}}>
            {`<`}   HTML  &emsp; 
                    CSS &emsp;  
                    JAVASCRIPT &emsp; 
                    APIs &emsp; 
                    MySQL &emsp; 
                    NoSQL &emsp; 
                    MongoDB &emsp; 
                    Express &emsp; 
                    REACT &emsp; 
                    NodeJS &emsp; 
                    MVC &emsp; 
                    PWA &emsp; 
                    {`/>`} 
            </p>
        </div>

    </div>;
}

export default HomePage;