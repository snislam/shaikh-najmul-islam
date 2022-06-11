import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch(`https://lit-retreat-57024.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    return (
        <div>
            <div className='w-full p-5 bg-sky-400'>
                <h1 className='text-3xl font-semibold text-center'>Project Name: {project.name}</h1>
            </div>
            <div className='container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-0 md:gap-10 my-10'>
                <div>
                    <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>Gallery</h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                        {
                            project?.images?.map((img, idx) => <img className='border-2 shadow-md' key={idx} src={img} alt='' />)
                        }
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>Features of {project.name}</h2>
                    <div className='ml-0 md:ml-3'>
                        {
                            project?.features?.map((feature, idx) => <p key={idx} className='my-1 text-slate-700'>{idx + 1}. {feature}</p>)
                        }
                    </div>
                    <div>
                        <h2 className='my-5 font-semibold'>Technologies used</h2>
                        {
                            project?.technologies?.map((tech, idx) => <button className='bg-slate-200 p-2 rounded-md mx-2' key={idx}>{tech}</button>)
                        }
                    </div>
                    <div className='my-5'>
                        <h2 className='text-2xl font-semibold text-indigo-800 mb-3'>Important Links</h2>
                        <div className='grid grid-cols-2 gap-3'>
                            <button className='bg-indigo-700 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-2 text-slate-200'><a href={project.live_link} target="_blank" rel="noreferrer">Live Site</a></button>
                            <button className='bg-purple-700 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-2 text-slate-200'><a href={project.client_site} target="_blank" rel="noreferrer">Client side</a></button>
                            {
                                project.server_site ? <button className='bg-green-700 hover:bg-indigo-600 duration-500 rounded-lg py-2 px-2 text-slate-200'><a href={project.server_site} target="_blank" rel="noreferrer">Server side</a></button> : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;