import React from 'react';
import { Project } from './Project';
import { Link } from 'react-router-dom';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <div className='pb-10'>
        <Link to={'/projects/' + project.id}>
          <img src={project.imageUrl} alt={project.name} className='w-ful rounded-3xl' />
          <section>       
              <h5 className="text-xl font-bold py-5 hover:text-sky-400">{project.name}</h5>
              <p>{formatDescription(project.description)}</p>
          </section>
        </Link>
    </div>
  );
}

export default ProjectCard;
