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
          <p>{project.platform}</p>
        </div>
        <div>
          <h3 className='font-bold text-2xl'>Deliverables</h3>
          <p>{project.deliver}</p>
        </div>
        <div>
          <h3 className='font-bold text-2xl'>Website</h3>
          <p><a href={project.websiteUrl}>Visit website</a></p>
        </div>
      </div>
      <div className="w-full">
          <img className="rounded-3xl" src={project.imageUrl} alt={project.name} />
      </div>
      <div className='flex mt-10'>
        <div className='w-1/2'><h4 className='text-2xl'>{project.name}</h4></div>
        <div className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
      </div>
    </div>
  );
}