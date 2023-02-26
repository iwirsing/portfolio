import React, { useState } from 'react';
// import all pages
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Project'
//import layout holder - a container for the pages
import Layout from './layout/Layout';
import PageLayout from './layout/PageLayout';
import GardenBed1 from './projects/assets/images/brick.jpeg';

//import css
import './PortfolioHolder.module.css';

//import header component
import Header from './Header';

//navigation
import Navigation from './Navigation';

//import footer
import Footer from './Footer';

export default function PortfolioHolder() {
    const [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if (currentPage === 'HomePage') {
            return <PageLayout> <HomePage /> </PageLayout>;
        }

        if (currentPage === 'ProjectsPage') {
            return <PageLayout> <ProjectsPage /> </PageLayout>;
        }

        if (currentPage === 'ContactPage') {
            return <PageLayout> <ContactPage /> </PageLayout>;
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <Layout className='container-fluid ' style={{ backgroundImage: `url(${GardenBed1})` }} >
    

            
            <div>
                <Header title='IW'>

                </Header>
            </div>


            <div className='row d-flex page-contain' style={{backgroundColor:'rgba(255, 255, 255, 0.75)',margin:'1rem',borderRadius:'20px'}}>
                {renderPage()}
                
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            </div>

            <footer>
                <Footer footer='© Ivy Wirsing 2023' />
            </footer>




        </Layout>
    );

}
