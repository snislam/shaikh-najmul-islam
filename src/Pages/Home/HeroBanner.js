import React from 'react';
import { Link } from 'react-router-dom';
import najmulIslam from '../../media/react_js_developer.png';
import resume from '../../media/shaikh_najmul_islam_jr_react_developer_june11.pdf';

const HeroBanner = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse px-12 container mx-auto justify-between items-center'>
            <div className='flex-1 my-3'>
                <p className='text-lg font-semibold'>Hello, I'm</p>
                <p className='text-3xl font-bold my-2'>Shaikh Najmul Islam</p>
                <h1 className='text-lg font-semibold my-3'>Jr. Front-end Web Developer from Bangladesh</h1>
                <p className='mb-5'>I am react js developer working for developing versatile website. I also use Express JS, MongoDB for making full-stack website. I have also some projects. You can check it out.</p>
                <button className='btn bg-indigo-600 hover:bg-indigo-900 duration-500 px-5 py-2 font-bold text-white rounded-3xl'><Link to="/contact" >Contact Me</Link></button>
                <button className='btn bg-[#FA4616] hover:bg-[#df3400] duration-500 ml-3 px-3 py-2 font-bold text-white rounded-3xl'><a href={resume} download="shaikh_najmul_islam_jr_front_end_developer_resume">Download Resume</a></button>
            </div>
            <div className='flex-1 my-3 hidden md:block'>
                <img src={najmulIslam} alt="" />
            </div>
        </div>
    );
};

export default HeroBanner;