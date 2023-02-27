import React from "react";
//card container
import Card from '../ui/Card'
//import css
import './Project.module.css';
import GithubIcon from './assets/images/github.png';



function Project(props) {
    return <Card key={props.id} >
        <a href={props.link} className='actions'>
            <div className='image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div>

                <h4>{props.title}</h4>
            </div>
        </a>
        <p className='content' style={{ fontSize: '1rem' }}>
           
            <a href={props.repository}>
                Repository: <img src={GithubIcon} alt='github link' style={{ height: '5rem', width: '5rem' }} ></img>
            </a>
            <div>
            {props.description}
            </div>
        </p>


    </Card>;

}

export default Project;