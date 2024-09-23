import React from 'react'
import ProjectCard from '../components/ProjectCard';
import projectData from '../Data/DataStorage.js';
import workingImg from '../assets/images/projectThumbnails/commingsoon-preview.png';

const Projects = () => {
    return (
        <main className='projects-section'>
            <h3 className='title-xl'>My most recent projects</h3>
            <div className='projects-container'>
                {projectData.map((project) => {
                    return(
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        imageUrl={project.imageUrl}
                        liveLink={project.liveLink}
                        gitRepo={ project.GitRepo} />
                    )
                })}
                <ProjectCard name={'Comming soon'} imageUrl={ workingImg} />
            </div>
            <div>
                <h3 className='title-xl'>Let's work together</h3>
                <p className='title-xl'>Get in Touch</p>
            </div> 
        </main>
    )
}

export default Projects