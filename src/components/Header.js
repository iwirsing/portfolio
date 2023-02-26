import './Header.module.css';
//import image


function Header({ currentPage, handlePageChange }) {
    return (
        <div className='col-sm-8 col-md-3 col-3  align-items-middle text-left order-1 order-sm-2' style={{display:'flex', alignItems:'center'}}>
            {/* <div className='d-block h-35'> </div> */}
            <nav className='nav' >
                <ul >
                   
                <li >
                    <a href='#homepage' onClick={() => handlePageChange('HomePage')}
                        className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}>Home</a>
                </li>

                <li>
                    <a href='#projects' onClick={() => handlePageChange('ProjectsPage')}
                        className={currentPage === 'ProjectsPage' ? 'nav-link active' : 'nav-link'}>Projects</a>
                </li>

                <li>
                    <a href='#contact' onClick={() => handlePageChange('ContactPage')}
                        className={currentPage === 'ContactPage' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
                </ul>
            </nav>
            {/* <div className='d-block h-35'> </div> */}

        </div>

    );
};

export default Header;