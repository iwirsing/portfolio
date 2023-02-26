import React from "react";
//card container
import Card from '../ui/Card'
//import css
import './Project.module.css';



function Project(props) {
    return <Card key={props.id} >
        <a href={props.link} className='actions'>
            <div className='image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div >

                <h3>{props.title}</h3>

                <p className='content' style={{fontSize:'1rem'}}>{props.description}</p>
            </div>
        </a>
    </Card>;

}

export default Project;