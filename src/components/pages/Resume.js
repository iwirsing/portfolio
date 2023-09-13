import React from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';
import resume from '../resume/ivyresume.pdf'


const handleDownload = (url, filename) => {
    axios.get(url, {
        responseType: 'blob',
    })
        .then((res) => {
            fileDownload(res.data, filename)
        })
}


function ResumePage() {

    //event handler for download




    return <div className='container progress' style={{ height: '100%', overflowY: 'scroll', backgroundColor: 'white' , margin:'auto' }}>

        <div className='container text-center' style={{ margin: 'auto' }}>


            {/* <h4 style={{ fontFamily: 'Tangerine', fontWeight: 'bolder', fontSize: '2rem' }}>Please check my &nbsp;
                <a href={"https://www.linkedin.com/in/ivywirsing"} className="icon linkedin" target="_blank" rel="noopener noreferrer" style={{ color: '#9C030C' }}>LinkedIn</a> &nbsp; for my education and work history</h4> */}

            <div className='row'>
                <div className='col-12 col-sm-6 font-end'>
                    <h5 style={{ fontFamily: 'Open Sans', fontWeight: 'bolder', textDecoration: 'underline' }}>
                        Front-End Proficiencies
                    </h5>
                    <ol>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Responsive Design
                        </li>
                        <li>
                            REACT
                        </li>
                        <li>
                            Bootstrap
                        </li>
                    </ol>
                </div>
                <div className='col-12 col-sm-6 font-end'>
                    <h5 style={{ fontFamily: 'Open Sans', fontWeight: 'bolder', textDecoration: 'underline' }}>
                        Back-End Proficiencies
                    </h5>
                    <ol>
                        <li>
                            APIs
                        </li>
                        <li>
                            Node
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MySQL, Sequelize
                        </li>
                        <li>
                            MondoDB, Mongoose
                        </li>
                        <li>
                            REST
                        </li>
                        <li>
                            GraphQL
                        </li>
                    </ol>
                </div>
                <div className='col-6 font-end'>
                    <h5 style={{ fontFamily: 'Open Sans', fontWeight: 'bolder', textDecoration: 'underline' }}>
                        Other Experiences
                    </h5>
                    <ol>
                        <li>
                            Agile
                        </li>
                        <li>
                            MVC
                        </li>
                        <li>
                            PWA
                        </li>
                        <li>
                            Heroku
                        </li>
                        <li>
                            Hostinger
                        </li>
                        <li>
                            Github
                        </li>
                    </ol>
                </div>
                <div className='col-6 resume align-middle'>
                    <p> </p>
                    
                    <button style={{ fontFamily: 'Tangerine', fontWeight: 'bolder', fontSize: '2rem' }} onClick={() => { handleDownload(resume, 'ivyresume.pdf') }}>Download Resume</button>
                </div>
            </div>

        </div>
    </div>;
}

export default ResumePage