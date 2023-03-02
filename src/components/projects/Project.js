import React from "react";
//card container
import Card from '../ui/Card'
//import css
import './Project.module.css';
import GithubIcon from './assets/images/github.png';



function Project(props) {
    return <Card key={props.id} >
        <a href={props.link} className='actions' target="_blank" rel="noopener noreferrer">
            <div className='image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div>

                <h5>{props.title}</h5>
            </div>
        </a>
        {props.description}
        <p className='content' style={{ fontSize: '0.8rem' }}>
           
            <a href={props.repository}>
                Repository: <img src={GithubIcon} alt='github link' style={{ height: '5rem', width: '5rem' }} target="_blank"></img>
            </a>
            
            
            
        </p>


    </Card>;

}

export default Project;