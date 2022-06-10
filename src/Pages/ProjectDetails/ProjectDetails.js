import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    // const project = projects.find(p => p._id === id);
    console.log(projects)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default ProjectDetails;