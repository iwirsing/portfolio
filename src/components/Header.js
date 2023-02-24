import React from 'react';
import classes from './Header.module.css';


function Header({ currentPage, handlePageChange }) {
    return (
        <header >
            <div>
                <h1> Ivy's Garden</h1>
                <p>Where web apps are cultivated.</p>
            </div>

            <nav className={classes.nav}>
                
                    <div>
                        <a href='#HomePage' onClick={() => handlePageChange('HomePage')}
                            className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}>Home Page</a>
                    </div>
                    <div>
                        <a href='#ContactPage' onClick={() => handlePageChange('ContactPage')}
                            className={currentPage === 'ContactPage' ? 'nav-link active' : 'nav-link'}>Contact Page</a>
                    </div>
                    <div>
                        <a href='#ProjectsPage' onClick={() => handlePageChange('ProjectsPage')}
                            className={currentPage === 'ProjectsPage' ? 'nav-link active' : 'nav-link'}>Projects Page</a>
                    </div>
            
            </nav>
        </header>
    );
};

export default Header;