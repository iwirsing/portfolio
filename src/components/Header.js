import classes from './Header.module.css';
//import image
import gardenbed from './projects/assets/images/gardenbed1.jpeg';




function Header({ currentPage, handlePageChange }) {
    return (
        <header style={{ backgroundImage: `url(${gardenbed})` }}>
            <div className={classes.header} >
                <h1> Ivy's Garden</h1>
                <p>Where web apps are cultivated.</p>
            </div>

            <nav className={classes.nav}>
                
                    <div>
                        <a href='#homepage' onClick={() => handlePageChange('HomePage')}
                            className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}>Home Page</a>
                    </div>

                    <div>
                        <a href='#projects' onClick={() => handlePageChange('ProjectsPage')}
                            className={currentPage === 'ProjectsPage' ? 'nav-link active' : 'nav-link'}>My Cultivars</a>
                    </div>

                    <div>
                        <a href='#contact' onClick={() => handlePageChange('ContactPage')}
                            className={currentPage === 'ContactPage' ? 'nav-link active' : 'nav-link'}>Contact Page</a>
                    </div>
            
            </nav>
        </header>
    );
};

export default Header;