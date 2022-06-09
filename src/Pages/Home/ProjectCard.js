import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { img, name } = project;
    return (
        <div className='border-2 rounded-md'>
            <img src={img} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl font-semibold my-3'>{name}</h2>
                <button className='bg-indigo-400 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-5 text-slate-200'><Link to='/'>Project Details</Link></button>
            </div>
        </div>
    );
};

export default ProjectCard;