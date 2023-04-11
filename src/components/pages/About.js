import React from 'react';
import ivy from '../projects/assets/images/ivy1.jpeg'
import './About.module.css'



function HomePage() {

    return <div className='progress' style={{ height: '100%', overflowY: 'scroll', backgroundColor: 'white', topMargin:'3rem'}}>
    <div className=' row  align-middle text-center container' style={{ margin:'auto'}}>

        <div className='col-12 col-sm-5 p-3 container-fluid' >
            <img className='img-fluid profile shadow-lg mb-3 bg-body rounded-pill border ' style={{backgroundColor:'#C8B3A7'}} src={ivy} alt='Ivy'></img>

        </div>
        <div className='col-12 col-sm-7 align-middle mt-3'>
          <p></p>

            <p style={{fontSize:'1rem'}}>Hi, my name is</p>
            <h2>Ivy Wirsing</h2>
            <p style={{fontSize:'1rem'}}>I am a developer based in Chicago. </p><p style={{fontSize:'1rem'}}>I love to garden, conquer trails and ski downhill. And just like the possibilities of the big outdoors... </p>
            <p style={{color:'#9C030C', fontWeight:'bolder'}}>I'd love to code for you!</p>

            </div>
        </div>

    </div>;
}

export default HomePage;