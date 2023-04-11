import './Navigation.module.css';
import { Link } from 'react-router-dom';



function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className='col-md-12 col-3  align-items-middle text-center' style={{minWidth:'240px', backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '20px', minHeight:'250px'  }}>
            {/* <div className='d-block h-35'> </div> */}
            <nav className='nav  text-center' style={{display:'flex',marginTop: '1rem', }} >
              
                   <ul className='navigation'>
                <li   >
                    <Link to='/portfolio' className='nav-link active'>About</Link>
                </li>

                <li>
                    <Link to='/projects' className='nav-link active' >Projects</Link>
                </li>

                <li>
                    <Link to='/contact' className='nav-link active'  >Contact</Link>
                </li>

                <li >
                    <Link to='/resume' className='nav-link active' >Resume</Link>
                </li>

                </ul>
            </nav>
            {/* <div className='d-block h-35'> </div> */}

        </div>

    );
};

export default Navigation;