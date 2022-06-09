import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id='about' className='flex flex-col md:flex-row justify-between items-center px-12 py-20 container mx-auto'>
            <div className='flex-1 w-3/4 md:mb-0 mb-5'>
                <h2 className='text-2xl font-bold my-2'>Technologies and Skills</h2>
                <div>
                    <h3 className='text-lg font-bold my-2'>Expertise</h3>
                    <p>React Js, React Router, React form, Axios, React Query, Javascript, Tailwind css, Bootstrap, Css3, Html5</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold my-2'>Comfortable</h3>
                    <p>Node Js, Express Js, MongoDb</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold my-2'>Tools</h3>
                    <p>VScode, Git, Github, Figma, Firebase, Netlify , Chrome Dev Tools</p>
                </div>
            </div>
            <div className='flex-1 ml-10'>
                <small className='text-lg text-indigo-700 font-semibold'>I am a developer</small>
                <h2 className='text-2xl font-bold my-2'>About Me</h2>
                <p className='my-2'>Hi, I am a React Js based front-end developer with a little bit of back-end technologies like Node.js, Express.js, MongoDB etc.I am from Gopalganj bangladesh and now I am studying at BSMRSTU. I am passionate to play with web technologies and making awesome user experience.</p>
                <p className='my-2'>Recently I have completed a complete Web Development course and I have made some projects by myself.I am a quick learner for any new technologies that can help to build awesome web application. I wanna be updated with every single technology related to my fields.</p>
                <button className='btn bg-[#FA4616] hover:bg-[#df3400] duration-500 px-5 py-2 font-bold text-white rounded-3xl mt-3'><Link to="/contact" >Contact Me</Link></button>
            </div>
        </section>
    );
};

export default About;