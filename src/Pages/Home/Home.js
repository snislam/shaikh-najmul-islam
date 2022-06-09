import React from 'react';
import PageTitle from '../../shared/PageTitle';
import About from './About';
import HeroBanner from './HeroBanner';
import Projects from './Projects';

const Home = () => {
    return (
        <>
            <PageTitle title="Home" />
            <HeroBanner />
            <About />
            <Projects />
        </>
    );
};

export default Home;