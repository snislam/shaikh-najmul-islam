import React from 'react';
import PageTitle from '../../shared/PageTitle';
import Contact from '../Contact/Contact';
import About from './About';
import FeaturedCard from './FeaturedCard';
import HeroBanner from './HeroBanner';
import MyServices from './MyServices';
import Projects from './Projects';

const Home = () => {
    return (
        <>
            <PageTitle title="Home" />
            <HeroBanner />
            <FeaturedCard />
            <About />
            <Projects />
            <MyServices />
            <Contact />
        </>
    );
};

export default Home;