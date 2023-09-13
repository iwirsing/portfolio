import './Navigation.module.css';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navigation({ currentPage, handlePageChange }) {
    return (
        <Navbar collapseOnSelect expand="false" className="bg-body-tertiary" >
            <Container className='col-md-12 col-3  align-items-middle navContainer navbar navbar-expand-lg navbar-light ' >

                {/* <div className='d-block h-35'> </div> */}
                <nav className='nav  text-center' style={{ display: 'flex' }} >
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{color:'white', fontWeight:'900', fontFamily:'monospace', fontSize:'3rem'}}>MENU</Navbar.Toggle> 
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <ul className='navigation mx-auto' style={{ display: 'auto' }}>
                            <li   >
                                <Nav.Link as={Link} to='/portfolio' className='nav-link active'  eventKey="1" >About</Nav.Link>
                            </li>

                            <li>
                                <Nav.Link as={Link}  to='/projects' className='nav-link active'  eventKey="2">Projects</Nav.Link>
                            </li>

                            <li>
                                <Nav.Link as={Link}  to='/contact' className='nav-link active'  eventKey="3" >Contact</Nav.Link>
                            </li>

                            <li >
                                <Nav.Link as={Link}  to='/resume' className='nav-link active'  eventKey="4">Resume</Nav.Link>
                            </li>

                        </ul>
                    </Navbar.Collapse>

                </nav>
                {/* <div className='d-block h-35'> </div> */}

            </Container>
        </Navbar>


    );
};

export default Navigation;