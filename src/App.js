import React from "react";
// import PortfolioHolder from "./components/PortfolioHolder";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './components/pages/About';
import ContactPage from './components/pages/Contact';
import ProjectsPage from './components/pages/Project'
import ResumePage from './components/pages/Resume';
//import layout holder - a container for the pages
import Layout from './components/layout/Layout';

import logo from '../src/assets/readme images/webdevivy.png';
//import background image
import GardenBed1 from './components/projects/assets/images/brick.jpeg';

//import css for this component
import './components/PortfolioHolder.module.css';

//import header component
import Header from './components/Header';

//import navigation component
import Navigation from './components/Navigation';

//import footer component
import Footer from './components/Footer';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Layout className='container align-items-center' style={{ backgroundImage: `url(${GardenBed1})` }} >

          <div className='row' style={{ minHeight: "400px" }}>

            <div className='col-12 col-md-3 col-sm-3 mx-auto' style={{ minHeight: "420px", padding: "1rem", marginBottom: '.75rem',width:'fit-content'  }}>
              {/* <div style={{ marginBottom: '5rem', minHeight: "8rem" }}>
                <Header title='WI' alt='Web Dev Ivy  logo'>
                </Header>

              </div> */}
              <div className='mx-auto' style={{width:'fit-content'}}>
              <img src={logo} style={{ height:'100%', width:'fit-content'}}></img>
              </div>
              

              <div className='align-items-center ' style={{ width:'fit-content' }}>
                <Navigation />
              </div>
            </div>


            <div className='col-8 col-md-8 col-sm-12 page-contain m-auto ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', height: '82vh', minHeight: '495px', borderRadius: '20px', minWidth: "375px" }}>
              {/* Wrap Route elements in a Routes component */}
              <Routes>
                {/* Define routes using the Route component to render different page components at different paths */}
                {/* Define a default route that will render the Home component */}
                <Route
                  path="/"
                  element={<HomePage />}
                />
                <Route
                  path="/portfolio"
                  element={<HomePage />}
                />
                {/* to projects page */}
                <Route
                  path="/projects"
                  element={<ProjectsPage />}
                />
                {/* to contact page */}
                <Route
                  path="/contact"
                  element={<ContactPage />}
                />
                <Route
                  path="/resume"
                  element={<ResumePage />}
                />
              </Routes>


            </div>
          </div>
          <Footer title='Copyright © 2023. Web Dev Ivy. All Rights Reserved.'></Footer> 
        </Layout>
      </Router >
    </ApolloProvider >
  );
}

export default App;
