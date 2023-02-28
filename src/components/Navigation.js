import './Navigation.module.css';
//import image


function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className='col-md-12 col-3  align-items-middle text-center' style={{minWidth:'240px', backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '20px', minHeight:'250px'  }}>
            {/* <div className='d-block h-35'> </div> */}
            <nav className='nav  text-center' style={{display:'flex',marginTop: '1rem', }} >
              
                   <ul className='navigation'>
                <li   >
                    <a href='#homepage' onClick={() => handlePageChange('HomePage')}
                        className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}>About</a>
                </li>

                <li>
                    <a href='#projects' onClick={() => handlePageChange('ProjectsPage')}
                        className={currentPage === 'ProjectsPage' ? 'nav-link active' : 'nav-link'}>Projects</a>
                </li>

                <li>
                    <a href='#contact' onClick={() => handlePageChange('ContactPage')}
                        className={currentPage === 'ContactPage' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>

                <li >
                    <a href='#resume' onClick={() => handlePageChange('ResumePage')}
                        className={currentPage === 'ResumePage' ? 'nav-link active' : 'nav-link'}>Resume</a>
                </li>

                </ul>
            </nav>
            {/* <div className='d-block h-35'> </div> */}

        </div>

    );
};

export default Navigation;