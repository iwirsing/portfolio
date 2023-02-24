import React, {useState} from 'react';
// import all pages
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Project'
//import layout holder - a container for the pages
import Layout from './layout/Layout'


//navigation
import Header from './Header';

export default function PortfolioHolder() {
    const [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if (currentPage === 'HomePage') {
          return <HomePage />;
        }
        if (currentPage === 'ContactPage') {
          return <ContactPage />;
        }
        if (currentPage === 'ProjectsPage') {
          return <ProjectsPage />;
        }
      };

      const handlePageChange=(page)=>setCurrentPage(page);
    

    return (
        <Layout>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}

        </Layout>
    );

}
