import React from "react";
import { Project } from './Project';
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const items = projects.map((project) => 
        <div key={project.id}>          
            <ProjectCard project={project} />
        </div>
    )

    return <div className="grid grid-cols-2 gap-4 lg:gap-10">{items}</div>;
}

export default ProjectList;