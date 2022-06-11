import React, { useEffect, useState } from 'react';
import PageTitle from '../../shared/PageTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://lit-retreat-57024.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div id='projects' className='container mx-auto px-12 py-20'>
            <PageTitle title="Projects" />
            <h1 className='text-5xl font-semibold text-indigo-600 text-center pb-10'>My projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    projects.map(project => <ProjectCard project={project} key={project._id} />)
                }
            </div>
        </div>
    );
};

export default Projects;