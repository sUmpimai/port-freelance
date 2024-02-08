import React from 'react';
import { Project } from './Project';

interface ProjectDetailProps {
  project: Project;
}
export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div>
      <h2 className='text-5xl font-bold text-black pb-20'>{project.name}</h2>
      <div className="grid grid-cols-3 gap-4 lg:gap-4 pb-10">
        <div>
          <h3 className='font-bold text-2xl'>Platforms</h3>
          <p>Web application</p>
        </div>
        <div>
          <h3 className='font-bold text-2xl'>Deliverables</h3>
          <p>HTML, CSS, JS</p>
        </div>
        <div>
          <h3 className='font-bold text-2xl'>Webiste</h3>
          <p><a href='/'>Visit website</a></p>
        </div>
      </div>
      <div className="card large">
          <img className="rounded-3xl" src={project.imageUrl} alt={project.name} />
      </div>
    </div>
  );
}