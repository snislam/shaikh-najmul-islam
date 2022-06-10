import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { _id, img, name, live_link, client_site, server_site } = project;
    return (
        <div className='border-2 rounded-md'>
            <img src={img} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl font-semibold my-3'>{name}</h2>
                <div className='grid grid-cols-2 gap-3'>
                    <button className='bg-indigo-700 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-2 text-slate-200'><Link to={`/project/${_id}`}>Details</Link></button>
                    <button className='bg-indigo-700 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-2 text-slate-200'><a href={live_link} target="_blank" rel="noreferrer">Live Site</a></button>
                    <button className='bg-purple-700 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-2 text-slate-200'><a href={client_site} target="_blank" rel="noreferrer">Client side</a></button>
                    {
                        server_site ? <button className='bg-green-700 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-2 text-slate-200'><a href={live_link} target="_blank" rel="noreferrer">Server side</a></button> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;